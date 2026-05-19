import type { AtIdentifierString, Client } from "@atproto/lex";
// import {
//   useFetchStoreItems,
//   usePutStoreItemMutation,
// } from "@atprotobrew/common/channel/modules/storeItemsHooks";
import { AppButton } from "@atprotobrew/common/core/components/AppButton";
import { Link } from "react-router-dom";
import { BubbleBackground } from "../launcher/BubbleBackground";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";

interface StoreProps {
  client: Client;
  identifier: AtIdentifierString;
}

export function Store({ client, identifier }: StoreProps) {
  const { data } = useFetchLaunchers({ client });
  // const storeItemMutation = usePutStoreItemMutation({ client, identifier });

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden select-none font-sans">
      <BubbleBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header
          className="flex items-center gap-4 px-6 py-4 shrink-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          <AppButton
            type="button"
            shape="circle"
            render={(props) => <Link {...props} to="/" />}
            aria-label="ランチャーに戻る"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4 text-blue-600"
            >
              <path
                d="M10 3.5L5.5 8 10 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AppButton>

          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(145deg, #4ade80, #16a34a)",
                boxShadow:
                  "0 2px 8px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="9"
                  width="13"
                  height="10"
                  rx="2"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M16 11 Q20 11 20 14.5 Q20 18 16 18"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M7 6 Q7 3.5 9.5 3.5 Q9.5 6 12 6 Q12 3.5 14.5 3.5 Q14.5 6 17 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  strokeOpacity="0.8"
                />
              </svg>
            </div>
            <div>
              <h1
                className="font-bold text-lg text-slate-800 leading-tight"
                style={{ textShadow: "0 1px 3px rgba(255,255,255,0.8)" }}
              >
                Atprotobrew store
              </h1>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-4 max-w-2xl w-full mx-auto">
          <div className="space-y-3">
            {data.body.view.map((channel) => {
              console.log(channel);

              return (
                <div
                  key={channel.title}
                  className="rounded-2xl p-4 flex items-center gap-4 glass-tile aero-shadow"
                >
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white drop-shadow">
                      <img src={channel.thumbnail} width={60} height={60} />
                    </div>
                    <div className="absolute top-1 left-2 w-9 h-3 rounded-full bg-white/35 blur-sm pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-80" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="font-semibold text-slate-800 text-sm">
                        {channel.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-0.5">
                      {channel.author}
                    </p>
                    <p className="text-xs text-slate-700/70 leading-relaxed line-clamp-2">
                      {channel.description}
                    </p>

                    {/* {isBrewing && (
                        <div className="mt-2">
                          <span className="text-xs text-green-700 font-medium">
                            Brewing...
                          </span>
                          <div className="mt-1 h-2 rounded-full bg-white/50 overflow-hidden border border-white/40">
                            <div
                              className="h-full rounded-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, #4ade80, #16a34a)",
                                animation:
                                  "brew-progress 2.2s ease-out forwards",
                              }}
                            />
                          </div>
                        </div>
                      )} */}
                  </div>

                  <div className="shrink-0">
                    <div className="flex items-center gap-1.5 text-green-700 bg-green-50/80 border border-green-200 rounded-xl px-3 py-2">
                      <svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 shrink-0"
                      >
                        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                      </svg>
                      <span className="text-xs font-semibold">Installed</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
