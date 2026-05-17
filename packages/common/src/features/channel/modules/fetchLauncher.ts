import { type AtIdentifierString, type Client } from "@atproto/lex";
import * as org from "@atprotobrew/atproto/lexicons/org";

export const lexicon = org.tarororo.brew.launcher;

export async function fetchLauncher({
  client,
  identifier,
}: {
  client: Client;
  identifier: AtIdentifierString;
}) {
  const res = await client.list(lexicon, {
    limit: 10,
    repo: identifier,
  });

  return res;
}
