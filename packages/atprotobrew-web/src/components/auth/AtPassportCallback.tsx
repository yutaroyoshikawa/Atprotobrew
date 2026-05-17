import { useEffect, useRef } from "react";
import { parseAtPassportCallback } from "../../hooks/useAtPassport";

interface Props {
  login: (handle: string, handleResolver: string) => Promise<void>;
}

export function AtPassportCallback({ login }: Props) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) {
      return;
    }

    ran.current = true;

    const params = new URLSearchParams(window.location.search);

    if (params.get("source") === "app") {
      // Relay the callback to the native app's custom scheme.
      const appUrl = new URL("org.tarororo.brew://atpassport/callback");

      params.forEach((value, key) => appUrl.searchParams.set(key, value));

      window.location.replace(appUrl.toString());

      return;
    }

    parseAtPassportCallback(login);
  }, [login]);

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
