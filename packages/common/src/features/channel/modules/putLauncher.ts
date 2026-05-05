import { type AtIdentifierString, type Client } from "@atproto/lex";
import type * as org from "@atprotobrew/atproto/lexicons/org";
import * as com from "@atprotobrew/atproto/lexicons/com";

export async function putLauncher({
  client,
  identifier,
  launcherItems,
}: {
  client: Client;
  identifier: AtIdentifierString;
  launcherItems: org.tarororo.brew.launcher.Item[];
}) {
  const res = await client.xrpc(com.atproto.repo.putRecord, {
    body: {
      repo: identifier,
      collection: "org.tarororo.brew.launcher",
      record: {
        items: launcherItems,
        $type: "org.tarororo.brew.launcher",
      } satisfies org.tarororo.brew.launcher.Main,
      rkey: "self",
    },
  });

  return res;
}
