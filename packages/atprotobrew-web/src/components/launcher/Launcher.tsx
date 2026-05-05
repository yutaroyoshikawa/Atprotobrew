import { useState } from "react";
import { Link } from "react-router-dom";
import { BubbleBackground } from "./BubbleBackground";
import { EmptyChannelTile } from "@atprotobrew/common/channel/components/EmptyChannelTile";
import { StoreChannelTile } from "@atprotobrew/common/channel/components/StoreChannelTile";
import { InstalledChannelTile } from "@atprotobrew/common/channel/components/InstalledChannelTile";
import { AppFooter } from "@atprotobrew/common/core/components/AppFooter";
import type { AtIdentifierString, Client } from "@atproto/lex";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";

const TOTAL_TILES = 12;

interface LauncerProps {
  onLogout: () => void;
  client: Client;
  identifier: AtIdentifierString;
}

export function Launcher({ client, identifier, onLogout }: LauncerProps) {
  useFetchLaunchers({ client, identifier });

  const [page] = useState(0);

  const tilesPerPage = TOTAL_TILES;

  // const pageChannels = installedChannels.slice(
  //   page * (tilesPerPage - 1),
  //   (page + 1) * (tilesPerPage - 1),
  // );

  // const tiles = Array.from({ length: tilesPerPage }, (_, i) => {
  //   if (i === 0) {
  //     return { kind: "store" } as const;
  //   }

  //   const ch = pageChannels[i - 1];

  //   if (ch) {
  //     return { kind: "installed", channel: ch } as const;
  //   }

  //   return { kind: "empty" } as const;
  // });

  return (
    <div className="relative w-full h-screen overflow-hidden select-none font-sans">
      <BubbleBackground />

      <div className="relative z-10 flex flex-col h-full">
        <main className="flex-1 flex items-center justify-center px-6 py-2">
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-4 gap-3">
              <StoreChannelTile
                render={(props) => <Link {...props} key="store" to="/store" />}
              />
            </div>
          </div>
        </main>

        <footer className="relative w-full">
          <AppFooter onRequestLogout={onLogout} />
        </footer>
      </div>
    </div>
  );
}
