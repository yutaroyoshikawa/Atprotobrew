import type { AtprotoDid, OAuthSession } from "@atproto/oauth-client-expo";
import type { StoredAccount } from "@atprotobrew/common/account/types";
import {
  ACCOUNT_STORE_KEY_MOBILE,
  useAccountStore,
} from "@atprotobrew/common/account/useAccountStore";
import {
  activeDidAtom,
  draftAtom,
  migrateLauncherLayout,
  perPageAtom,
  removeLauncherLayout,
  storeViewsAtom,
} from "@atprotobrew/common/launcher/launcherStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQueryClient } from "@tanstack/react-query";
import { useStore } from "jotai";
import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_HANDLE_RESOLVER,
  getExpoOAuthClient,
  onSessionDeleted,
} from "./client";

const OLD_AUTH_DID_KEY = "@atprotobrew/auth_did";
const OLD_AUTH_RESOLVER_KEY = "@atprotobrew/auth_handle_resolver";

export type AuthState =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | { status: "switching" }
  | { status: "authenticated"; session: OAuthSession; sub: AtprotoDid };

function isAtprotoDid(value: string): value is AtprotoDid {
  return value.startsWith("did:");
}

const asyncStorageAdapter = {
  get: (key: string) => AsyncStorage.getItem(key),
  set: (key: string, value: string) => AsyncStorage.setItem(key, value),
  remove: (key: string) => AsyncStorage.removeItem(key),
};

async function runMigration(
  existingRaw: string | null,
): Promise<string | null> {
  if (existingRaw !== null) {
    return existingRaw;
  }

  const [[, oldDid], [, oldResolver]] = await AsyncStorage.multiGet([
    OLD_AUTH_DID_KEY,
    OLD_AUTH_RESOLVER_KEY,
  ]);

  if (!oldDid || !isAtprotoDid(oldDid)) {
    return null;
  }

  migrateLauncherLayout(oldDid);

  const now = Date.now();
  const initialState = {
    accounts: [
      {
        did: oldDid,
        handle: oldDid,
        handleResolver: oldResolver ?? DEFAULT_HANDLE_RESOLVER,
        addedAt: now,
        lastUsedAt: now,
      },
    ],
    activeDid: oldDid,
  };

  await AsyncStorage.multiRemove([OLD_AUTH_DID_KEY, OLD_AUTH_RESOLVER_KEY]);

  return JSON.stringify(initialState);
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({ status: "loading" });
  const sessionRef = useRef<OAuthSession | null>(null);

  const queryClient = useQueryClient();
  const jotaiStore = useStore();

  const accountStore = useAccountStore(
    asyncStorageAdapter,
    ACCOUNT_STORE_KEY_MOBILE,
    runMigration,
  );

  useEffect(() => {
    if (accountStore.isLoading) {
      return;
    }

    let cancelled = false;

    const unsubscribe = onSessionDeleted((sub: AtprotoDid) => {
      if (sessionRef.current?.sub !== sub) {
        return;
      }

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
    const oauthClient = getExpoOAuthClient(handleResolver);

    jotaiStore.set(activeDidAtom, activeDid);

    oauthClient
      .restore(activeDid)
      .then((session: OAuthSession) => {
        if (cancelled) {
          return;
        }

        sessionRef.current = session;
        accountStore.updateHandle(activeDid, session.sub).catch(() => {});
        setAuthState({ status: "authenticated", session, sub: session.sub });
      })
      .catch(async () => {
        if (cancelled) {
          return;
        }

        await accountStore.removeAccount(activeDid).catch(() => {});
        jotaiStore.set(activeDidAtom, null);
        setAuthState({ status: "unauthenticated" });
      });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [
    accountStore.isLoading,
    accountStore.removeAccount,
    accountStore.setActiveDid,
    accountStore.updateHandle,
    accountStore.accounts.find,
    jotaiStore.set,
    accountStore,
  ]);

  const login = async (
    handle: string,
    handleResolver: string,
  ): Promise<void> => {
    const oauthClient = getExpoOAuthClient(handleResolver);
    const session: OAuthSession = await oauthClient.signIn(handle);

    const now = Date.now();
    const account: StoredAccount = {
      did: session.did,
      handle,
      handleResolver,
      addedAt: now,
      lastUsedAt: now,
    };

    await accountStore.addAccount(account);
    await accountStore.setActiveDid(session.sub);

    jotaiStore.set(activeDidAtom, session.sub);
    sessionRef.current = session;
    setAuthState({ status: "authenticated", session, sub: session.sub });
  };

  const logout = async (): Promise<void> => {
    const session = sessionRef.current;

    try {
      await session?.signOut();
    } catch {
      // sign-out errors are non-fatal
    }

    sessionRef.current = null;

    await accountStore.setActiveDid(null).catch(() => {});
    jotaiStore.set(activeDidAtom, null);
    setAuthState({ status: "unauthenticated" });
  };

  const switchAccount = async (targetDid: string): Promise<void> => {
    if (authState.status === "switching") {
      return;
    }

    const currentDid =
      authState.status === "authenticated" ? authState.sub : null;

    if (targetDid === currentDid) {
      return;
    }

    setAuthState({ status: "switching" });

    await queryClient.cancelQueries();
    queryClient.clear();

    jotaiStore.set(draftAtom, null);
    jotaiStore.set(storeViewsAtom, []);
    jotaiStore.set(perPageAtom, 0);
    jotaiStore.set(activeDidAtom, targetDid);

    const targetAccount = accountStore.accounts.find(
      (a) => a.did === targetDid,
    );
    const handleResolver =
      targetAccount?.handleResolver ?? DEFAULT_HANDLE_RESOLVER;
    const oauthClient = getExpoOAuthClient(handleResolver);

    try {
      const session = await oauthClient.restore(targetDid);

      await accountStore.setActiveDid(targetDid);

      sessionRef.current = session;
      setAuthState({ status: "authenticated", session, sub: session.sub });
    } catch {
      await accountStore.removeAccount(targetDid).catch(() => {});
      jotaiStore.set(activeDidAtom, currentDid);
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
      const session =
        await getExpoOAuthClient(handleResolver).restore(targetDid);

      await session.signOut();
    } catch {
      // revoke failure is non-fatal
    }

    removeLauncherLayout(targetDid);
    await accountStore.removeAccount(targetDid);

    const remaining = accountStore.accounts.filter((a) => a.did !== targetDid);
    const next = [...remaining].sort((a, b) => b.lastUsedAt - a.lastUsedAt)[0];

    if (next) {
      await switchAccount(next.did);
    } else {
      sessionRef.current = null;
      jotaiStore.set(activeDidAtom, null);
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
