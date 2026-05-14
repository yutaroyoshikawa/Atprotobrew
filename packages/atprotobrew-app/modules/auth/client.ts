import type { AtprotoDid } from "@atproto/oauth-client-expo";
import { ExpoOAuthClient } from "@atproto/oauth-client-expo";
import clientMetadataJson from "../../../atprotobrew-web/public/oauth/native/client-metadata.json";

type SessionDeletedHandler = (sub: AtprotoDid, cause: unknown) => void;

// Custom scheme with dots required by ExpoOAuthClient (CUSTOM_URI_SCHEME_REGEX)
type CustomSchemeUri = `${string}.${string}:/${string}`;

function isCustomSchemeUri(uri: string): uri is CustomSchemeUri {
  return /^[^.]+\.[^:]+:\//.test(uri);
}

function isCustomSchemeUriList(
  uris: string[],
): uris is [CustomSchemeUri, ...string[]] {
  return uris.length > 0 && isCustomSchemeUri(uris[0]);
}

const deleteHandlers = new Set<SessionDeletedHandler>();

let client: ExpoOAuthClient | null = null;

export function getExpoOAuthClient(): ExpoOAuthClient {
  if (!client) {
    const { redirect_uris } = clientMetadataJson;

    if (!isCustomSchemeUriList(redirect_uris)) {
      throw new Error(
        `redirect_uris must start with a custom scheme URI (e.g. "org.example.app:/..."): ${JSON.stringify(redirect_uris)}`,
      );
    }

    client = new ExpoOAuthClient({
      clientMetadata: {
        ...clientMetadataJson,
        redirect_uris,
      },
      handleResolver: "https://bsky.social",
      onDelete: (sub: AtprotoDid, cause: unknown) => {
        for (const handler of deleteHandlers) {
          handler(sub, cause);
        }
      },
    });
  }

  return client;
}

export function onSessionDeleted(handler: SessionDeletedHandler): () => void {
  deleteHandlers.add(handler);

  return () => {
    deleteHandlers.delete(handler);
  };
}
