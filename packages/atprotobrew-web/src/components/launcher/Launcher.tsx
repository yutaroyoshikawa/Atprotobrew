import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BubbleBackground } from "./BubbleBackground";
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

export function Launcher({ client, onLogout }: LauncerProps) {
  const navigate = useNavigate();
  const { data } = useFetchLaunchers({ agent: client });

  const installChannels = data.body.view;

  const [page] = useState(0);

  const tilesPerPage = TOTAL_TILES;

  const pageChannels = installChannels.slice(
    page * (tilesPerPage - 1),
    (page + 1) * (tilesPerPage - 1),
  );

  return (
    <div className="relative w-full h-screen overflow-hidden select-none font-sans">
      <BubbleBackground />

      <div className="relative z-10 flex flex-col h-full">
        <main className="flex-1 flex items-center justify-center px-6 py-2">
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-4 gap-3">
              <StoreChannelTile
                render={(props) => <Link {...props} to="/store" />}
              />
              {pageChannels.map((tile) => (
                <InstalledChannelTile
                  key={tile.uri}
                  channelName={tile.title}
                  thumbnailUrl={tile.thumbnail}
                  render={(props) => (
                    <Link {...props} to={`/channel/${tile.title}`} />
                  )}
                />
              ))}
            </div>
          </div>
        </main>

        <footer className="relative w-full">
          <AppFooter
            onRequestOpenSettings={() => navigate("/settings")}
            onRequestLogout={onLogout}
          />
        </footer>
      </div>
    </div>
  );
}
