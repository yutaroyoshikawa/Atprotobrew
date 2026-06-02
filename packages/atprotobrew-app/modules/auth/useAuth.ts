import type { AtprotoDid, OAuthSession } from "@atproto/oauth-client-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_HANDLE_RESOLVER,
  getExpoOAuthClient,
  onSessionDeleted,
} from "./client";

const AUTH_DID_KEY = "@atprotobrew/auth_did";
const AUTH_HANDLE_RESOLVER_KEY = "@atprotobrew/auth_handle_resolver";

export type AuthState =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | { status: "authenticated"; session: OAuthSession; sub: AtprotoDid };

function isAtprotoDid(value: string): value is AtprotoDid {
  return value.startsWith("did:");
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({ status: "loading" });
  const sessionRef = useRef<OAuthSession | null>(null);

  useEffect(() => {
    let cancelled = false;

    const unsubscribe = onSessionDeleted((sub: AtprotoDid) => {
      if (sessionRef.current?.sub !== sub) return;
      sessionRef.current = null;
      AsyncStorage.multiRemove([AUTH_DID_KEY, AUTH_HANDLE_RESOLVER_KEY]).catch(
        () => {},
      );
      setAuthState({ status: "unauthenticated" });
    });

    AsyncStorage.multiGet([AUTH_DID_KEY, AUTH_HANDLE_RESOLVER_KEY])
      .then(async ([[, storedDid], [, storedResolver]]) => {
        if (cancelled) return;

        if (!storedDid || !isAtprotoDid(storedDid)) {
          if (storedDid) {
            await AsyncStorage.multiRemove([
              AUTH_DID_KEY,
              AUTH_HANDLE_RESOLVER_KEY,
            ]);
          }
          setAuthState({ status: "unauthenticated" });
          return;
        }

        const handleResolver = storedResolver ?? DEFAULT_HANDLE_RESOLVER;
        const oauthClient = getExpoOAuthClient(handleResolver);
        const session = await oauthClient.restore(storedDid);

        if (cancelled) return;

        sessionRef.current = session;
        setAuthState({ status: "authenticated", session, sub: session.sub });
      })
      .catch(async () => {
        await AsyncStorage.multiRemove([
          AUTH_DID_KEY,
          AUTH_HANDLE_RESOLVER_KEY,
        ]).catch(() => {});

        if (!cancelled) {
          setAuthState({ status: "unauthenticated" });
        }
      });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const login = async (
    handle: string,
    handleResolver: string,
  ): Promise<void> => {
    const oauthClient = getExpoOAuthClient(handleResolver);
    const session = await oauthClient.signIn(handle);

    await AsyncStorage.multiSet([
      [AUTH_DID_KEY, session.sub],
      [AUTH_HANDLE_RESOLVER_KEY, handleResolver],
    ]);

    sessionRef.current = session;
    setAuthState({ status: "authenticated", session, sub: session.sub });
  };

  const logout = async (): Promise<void> => {
    const session = sessionRef.current;

    try {
      await session?.signOut();
    } catch {
      // sign-out errors are non-fatal; local state is cleared regardless
    }

    sessionRef.current = null;

    await AsyncStorage.multiRemove([
      AUTH_DID_KEY,
      AUTH_HANDLE_RESOLVER_KEY,
    ]).catch(() => {});

    setAuthState({ status: "unauthenticated" });
  };

  return { authState, login, logout };
}
