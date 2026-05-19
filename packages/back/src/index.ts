import "./polyfills";
import * as org from "@atprotobrew/atproto/lexicons/org";
import { Hono } from "hono";
import { checkAuthFactory } from "./auth";
import { createServer } from "./lexicons";
import { BlobRef } from "@atproto/lex";
import { CID } from "multiformats/cid";

// biome-ignore lint/complexity/noBannedTypes: aaaaa
const xrpc = createServer<{}>();

const storeRecord1: org.tarororo.brew.storeItem.Main = {
  $type: "org.tarororo.brew.storeItem",
  author: "Bluesky Social PBC",
  title: "Bluesky",
  launch: {
    $type: "org.tarororo.brew.storeItem#launchWeb",
    link: "https://bsky.app",
  } satisfies org.tarororo.brew.storeItem.LaunchWeb,
  description: "Bluesky",
  thumbnail: {
    $type: "blob",
    ref: CID.parse(
      "bafkreihwihm6kpd6zuwhhlro75p5qks5qtrcu55jp3gddbfjsieiv7wuka",
    ),
    mimeType: "image/jpeg",
    size: 256555,
  } satisfies BlobRef,
};
const storeRecord2: org.tarororo.brew.storeItem.Main = {
  $type: "org.tarororo.brew.storeItem",
  author: "ほりべあ",
  description: "",
  title: "TOKIMEKI",
  launch: {
    $type: "org.tarororo.brew.storeItem#launchWeb",
    link: "https://tokimeki.blue",
  } satisfies org.tarororo.brew.storeItem.LaunchWeb,
  thumbnail: {
    $type: "blob",
    ref: CID.parse(
      "bafkreibsbcc6yqqhdvmb6hzzqkwnxobog45cuelt4twmbdpctmcs7e4udy",
    ),
    mimeType: "image/png",
    size: 42840,
  } satisfies BlobRef,
};

const auth = checkAuthFactory({ ownDid: "did:web:brew.tarororo.org" });

xrpc.org.tarororo.brew.getLauncher({
  auth,
  handler: async ({ auth, params, input, c }) => {
    console.log(auth.credentials);
    return {
      encoding: "application/json",
      body: {
        record: {
          $type: "org.tarororo.brew.launcher",
          items: [
            {
              $type: "org.tarororo.brew.launcher#item",
              storeItemRef: { uri: "", cid: "" },
            },
            {
              $type: "org.tarororo.brew.launcher#item",
              storeItemRef: { uri: "", cid: "" },
            },
          ],
        },
        view: [
          {
            ...storeRecord1,
            $type: "org.tarororo.brew.getLauncher#launcherViewItem",
            uri: "at://did:web:brew.tarororo.org/org.tarororo.brew.storeItem/bluesky",
            record: storeRecord1,
            thumbnail:
              "https://cdn.bsky.app/img/avatar/plain/did:plc:z72i7hdynmk6r22z27h6tvur/bafkreihwihm6kpd6zuwhhlro75p5qks5qtrcu55jp3gddbfjsieiv7wuka",
          } satisfies org.tarororo.brew.getLauncher.LauncherViewItem,
          {
            ...storeRecord2,
            $type: "org.tarororo.brew.getLauncher#launcherViewItem",
            uri: "at://did:web:brew.tarororo.org/org.tarororo.brew.storeItem/tokimeki",
            record: storeRecord2,
            thumbnail:
              "https://cdn.bsky.app/img/avatar/plain/did:plc:4tr5dqti7nmu6g2czpthntak/bafkreibsbcc6yqqhdvmb6hzzqkwnxobog45cuelt4twmbdpctmcs7e4udy",
          } satisfies org.tarororo.brew.getLauncher.LauncherViewItem,
        ],
      },
    };
  },
});

// biome-ignore lint/complexity/noBannedTypes: aaaaa
const app = new Hono<{}>();
app.route("/", xrpc.xrpc.createApp());

export default app;
