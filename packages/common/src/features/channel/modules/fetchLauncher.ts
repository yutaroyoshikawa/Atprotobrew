import { type AtIdentifierString, type Client } from "@atproto/lex";
import * as com from "@atprotobrew/atproto/lexicons/com";
import * as org from "@atprotobrew/atproto/lexicons/org";

export const lexicon = com.atproto.repo.getRecord;

export async function fetchLauncher({
  client,
  identifier,
}: {
  client: Client;
  identifier: AtIdentifierString;
}) {
  const res = await client.xrpcSafe(lexicon, {
    params: {
      repo: identifier,
      collection: "org.tarororo.brew.launcher",
      rkey: "self",
    },
  });

  if (!res.success) {
    if (res.error === "RecordNotFound") {
      return [];
    }

    throw res;
  }

  console.log(res.body.value);

  return [] as org.tarororo.brew.launcher.Item[];
}
