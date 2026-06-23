import {
  type AtIdentifierString,
  Client,
  asAtIdentifierString,
} from "@atproto/lex";
import type { OAuthSession } from "@atproto/oauth-client-browser";
import {
  ACCOUNT_STORE_KEY_WEB,
  useAccountStore,
} from "@atprotobrew/common/account/useAccountStore";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_HANDLE_RESOLVER,
  getOAuthClient,
  onSessionDeleted,
} from "./useOAuthClient";

export type AuthState =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | { status: "switching" }
  | {
      status: "authenticated";
      client: Client;
      session: OAuthSession;
      identifier: AtIdentifierString;
    };

const localStorageAdapter = {
  get: (key: string) => Promise.resolve(localStorage.getItem(key)),
  set: (key: string, value: string) =>
    Promise.resolve(localStorage.setItem(key, value)),
  remove: (key: string) => Promise.resolve(localStorage.removeItem(key)),
};

const OLD_RESOLVER_KEY = "atprotobrew:handleResolver";

async function runMigration(
  existingRaw: string | null,
): Promise<string | null> {
  if (existingRaw !== null) {
    return existingRaw;
  }

  // 旧フォーマットの resolver を読む（handleResolver だけ分かる段階）
  const oldResolver =
    localStorage.getItem(OLD_RESOLVER_KEY) ?? DEFAULT_HANDLE_RESOLVER;

  // OAuth callback があれば init() で DID が取れる
  const oauthClient = await getOAuthClient(oldResolver);
  const result = await oauthClient.init();

  if (!result?.session) {
    // セッション復元不可 → 旧データを残したまま何もしない
    return null;
  }

  const did = result.session.sub;
  const now = Date.now();
  const initialState = {
    accounts: [
      {
        did,
        handle: did,
        handleResolver: oldResolver,
        addedAt: now,
        lastUsedAt: now,
      },
    ],
    activeDid: did,
  };

  localStorage.removeItem(OLD_RESOLVER_KEY);

  return JSON.stringify(initialState);
}

function buildClient(session: OAuthSession): Client {
  return new Client(session, { service: "did:web:brew.tarororo.org#brew_api" });
}

export function useOAuth() {
  const [authState, setAuthState] = useState<AuthState>({ status: "loading" });
  const sessionRef = useRef<OAuthSession | null>(null);

  const queryClient = useQueryClient();
  const accountStore = useAccountStore(
    localStorageAdapter,
    ACCOUNT_STORE_KEY_WEB,
    runMigration,
  );

  useEffect(() => {
    if (accountStore.isLoading) {
      return;
    }

    let cancelled = false;

    const unsubscribe = onSessionDeleted(() => {
      sessionRef.current = null;
      accountStore.setActiveDid(null).catch(() => {});
      setAuthState({ status: "unauthenticated" });
    });

    const { activeDid } = accountStore;

    if (!activeDid) {
      setAuthState({ status: "unauthenticated" });

      return () => {
        cancelled = true;
        unsubscribe();
      };
    }

    const activeAccount = accountStore.accounts.find(
      (a) => a.did === activeDid,
    );
    const handleResolver =
      activeAccount?.handleResolver ?? DEFAULT_HANDLE_RESOLVER;

    getOAuthClient(handleResolver)
      .then(async (oauthClient) => {
        // まず OAuth callback を処理する（リダイレクト戻り）
        const initResult = await oauthClient.init();

        if (cancelled) {
          return;
        }

        if (initResult?.session) {
          const did = initResult.session.did;

          // 新規アカウントの場合はストアに追加してアクティブ化
          if (!accountStore.accounts.some((a) => a.did === did)) {
            const now = Date.now();
            await accountStore.addAccount({
              did,
              handle: did,
              handleResolver,
              addedAt: now,
              lastUsedAt: now,
            });
          }

          await accountStore.setActiveDid(did);

          sessionRef.current = initResult.session;
          const client = buildClient(initResult.session);

          setAuthState({
            status: "authenticated",
            client,
            session: initResult.session,
            identifier: asAtIdentifierString(did),
          });

          return;
        }

        // callback なし → activeDid のセッションを明示的に復元
        const session = await oauthClient.restore(activeDid);

        if (cancelled) {
          return;
        }

        sessionRef.current = session;
        const client = buildClient(session);

        setAuthState({
          status: "authenticated",
          client,
          session,
          identifier: asAtIdentifierString(activeDid),
        });
      })
      .catch(() => {
        if (!cancelled) {
          accountStore.setActiveDid(null).catch(() => {});
          setAuthState({ status: "unauthenticated" });
        }
      });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [
    accountStore.isLoading,
    accountStore.accounts.some,
    accountStore.addAccount,
    accountStore.accounts.find,
    accountStore.setActiveDid,
    accountStore,
  ]);

  const login = async (handle: string, handleResolver: string) => {
    const oauthClient = await getOAuthClient(handleResolver);

    // handleResolver は callback 後の migration で使えるよう sessionStorage に保存
    sessionStorage.setItem("atprotobrew:pendingHandleResolver", handleResolver);

    await oauthClient.signInRedirect(handle);
  };

  const logout = async () => {
    const session = sessionRef.current;

    try {
      await session?.signOut();
    } catch {
      // ignore errors during sign out
    }

    sessionRef.current = null;
    await accountStore.setActiveDid(null).catch(() => {});
    setAuthState({ status: "unauthenticated" });
  };

  const switchAccount = async (targetDid: string): Promise<void> => {
    if (authState.status === "switching") {
      return;
    }

    const currentDid =
      authState.status === "authenticated" ? authState.session.sub : null;

    if (targetDid === currentDid) {
      return;
    }

    setAuthState({ status: "switching" });

    await queryClient.cancelQueries();
    queryClient.clear();

    const targetAccount = accountStore.accounts.find(
      (a) => a.did === targetDid,
    );
    const handleResolver =
      targetAccount?.handleResolver ?? DEFAULT_HANDLE_RESOLVER;

    try {
      const oauthClient = await getOAuthClient(handleResolver);
      const session = await oauthClient.restore(targetDid);

      await accountStore.setActiveDid(targetDid);

      sessionRef.current = session;
      const client = buildClient(session);

      setAuthState({
        status: "authenticated",
        client,
        session,
        identifier: asAtIdentifierString(targetDid),
      });
    } catch {
      await accountStore.removeAccount(targetDid).catch(() => {});
      setAuthState({ status: "unauthenticated" });
    }
  };

  const deleteAccount = async (targetDid: string): Promise<void> => {
    setAuthState({ status: "switching" });

    const targetAccount = accountStore.accounts.find(
      (a) => a.did === targetDid,
    );
    const handleResolver =
      targetAccount?.handleResolver ?? DEFAULT_HANDLE_RESOLVER;

    try {
      const oauthClient = await getOAuthClient(handleResolver);
      const session = await oauthClient.restore(targetDid);

      await session.signOut();
    } catch {
      // revoke failure is non-fatal
    }

    await accountStore.removeAccount(targetDid);

    const remaining = accountStore.accounts.filter((a) => a.did !== targetDid);
    const next = [...remaining].sort((a, b) => b.lastUsedAt - a.lastUsedAt)[0];

    if (next) {
      await switchAccount(next.did);
    } else {
      sessionRef.current = null;
      setAuthState({ status: "unauthenticated" });
    }
  };

  return {
    authState,
    accounts: accountStore.accounts,
    login,
    logout,
    switchAccount,
    deleteAccount,
  };
}
