import type { AtprotoDid, OAuthSession } from "@atproto/oauth-client-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { getExpoOAuthClient, onSessionDeleted } from "./client";

const AUTH_DID_KEY = "@atprotobrew/auth_did";

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
      AsyncStorage.removeItem(AUTH_DID_KEY).catch(() => {});
      setAuthState({ status: "unauthenticated" });
    });

    AsyncStorage.getItem(AUTH_DID_KEY)
      .then(async (storedDid) => {
        if (cancelled) {
          return;
        }

        if (!storedDid || !isAtprotoDid(storedDid)) {
          if (storedDid) {
            await AsyncStorage.removeItem(AUTH_DID_KEY);
          }

          setAuthState({ status: "unauthenticated" });

          return;
        }

        const oauthClient = getExpoOAuthClient();
        const session = await oauthClient.restore(storedDid);

        if (cancelled) {
          return;
        }

        sessionRef.current = session;

        setAuthState({
          status: "authenticated",
          session,
          sub: session.sub,
        });
      })
      .catch(async () => {
        await AsyncStorage.removeItem(AUTH_DID_KEY).catch(() => {});

        if (!cancelled) {
          setAuthState({ status: "unauthenticated" });
        }
      });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const login = async (handle: string): Promise<void> => {
    const oauthClient = getExpoOAuthClient();

    const session = await oauthClient.signIn(handle);

    await AsyncStorage.setItem(AUTH_DID_KEY, session.sub);

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

    await AsyncStorage.removeItem(AUTH_DID_KEY).catch(() => {});

    setAuthState({ status: "unauthenticated" });
  };

  return { authState, login, logout };
}
