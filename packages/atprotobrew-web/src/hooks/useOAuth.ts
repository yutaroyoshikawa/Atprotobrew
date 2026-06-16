import { type AtIdentifierString, Client } from "@atproto/lex";
import type { OAuthSession } from "@atproto/oauth-client-browser";
import { useEffect, useRef, useState } from "react";
import {
  getOAuthClient,
  onSessionDeleted,
  saveHandleResolver,
} from "./useOAuthClient";

export type AuthState =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | {
      status: "authenticated";
      client: Client;
      session: OAuthSession;
      identifier: AtIdentifierString;
    };

export function useOAuth() {
  const [authState, setAuthState] = useState<AuthState>({ status: "loading" });
  const sessionRef = useRef<OAuthSession | null>(null);

  useEffect(() => {
    let cancelled = false;

    const unsubscribe = onSessionDeleted(() => {
      sessionRef.current = null;
      setAuthState({ status: "unauthenticated" });
    });

    getOAuthClient()
      .then((client) => {
        if (cancelled) {
          return;
        }

        return client.init();
      })
      .then((result) => {
        if (cancelled) {
          return;
        }

        if (result?.session) {
          sessionRef.current = result.session;

          const client = new Client(result.session, {
            service: "did:web:brew.tarororo.org#brew_api",
          });

          setAuthState({
            status: "authenticated",
            client,
            session: result.session,
            identifier: result.session.sub,
          });
        } else {
          setAuthState({ status: "unauthenticated" });
        }
      })
      .catch(() => {
        if (!cancelled) setAuthState({ status: "unauthenticated" });
      });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const login = async (handle: string, handleResolver: string) => {
    saveHandleResolver(handleResolver);
    const client = await getOAuthClient(handleResolver);

    await client.signInRedirect(handle);
  };

  const logout = async () => {
    const session = sessionRef.current;

    try {
      await session?.signOut();
    } catch {
      // ignore errors during sign out
    }

    sessionRef.current = null;

    setAuthState({ status: "unauthenticated" });
  };

  return { authState, login, logout };
}
