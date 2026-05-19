import { type Client } from "@atproto/lex";
import * as org from "@atprotobrew/atproto/lexicons/org";

export const lexicon = org.tarororo.brew.getLauncher;

export async function fetchLauncher({ client }: { client: Client }) {
  const res = await client.xrpc(org.tarororo.brew.getLauncher);

  return res;
}
