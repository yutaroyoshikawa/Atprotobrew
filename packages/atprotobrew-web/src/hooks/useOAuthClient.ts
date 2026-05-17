import {
  BrowserOAuthClient,
  buildLoopbackClientId,
} from "@atproto/oauth-client-browser";
import config from "../../public/oauth/web/client-metadata.json";

export const DEFAULT_HANDLE_RESOLVER = "https://bsky.social";
const HANDLE_RESOLVER_STORAGE_KEY = "atprotobrew:handleResolver";

type SessionDeletedHandler = (sub: string, cause: unknown) => void;

const deleteHandlers = new Set<SessionDeletedHandler>();
const clientCache = new Map<string, Promise<BrowserOAuthClient>>();

function getClientId(): string {
  if (import.meta.env.DEV) {
    // Always use the root path so the generated client ID is http://localhost?redirect_uri=...
    // regardless of which page calls this (e.g. /atpassport/callback).
    return buildLoopbackClientId({
      hostname: window.location.hostname,
      port: window.location.port,
      pathname: "/",
    });
  }

  return config.client_id;
}

export function saveHandleResolver(resolver: string): void {
  localStorage.setItem(HANDLE_RESOLVER_STORAGE_KEY, resolver);
}

export function loadHandleResolver(): string {
  return (
    localStorage.getItem(HANDLE_RESOLVER_STORAGE_KEY) ?? DEFAULT_HANDLE_RESOLVER
  );
}

export function getOAuthClient(
  handleResolver: string = loadHandleResolver(),
): Promise<BrowserOAuthClient> {
  const cached = clientCache.get(handleResolver);
  if (cached) return cached;

  const promise = BrowserOAuthClient.load({
    clientId: getClientId(),
    handleResolver,
    onDelete: (sub, cause) => {
      for (const handler of deleteHandlers) handler(sub, cause);
    },
  });

  clientCache.set(handleResolver, promise);
  return promise;
}

export function onSessionDeleted(handler: SessionDeletedHandler): () => void {
  deleteHandlers.add(handler);

  return () => {
    deleteHandlers.delete(handler);
  };
}
