import type { Client } from "@atproto/lex";
import { useFollowActions } from "@atprotobrew/common/user/modules/useFollowActions";
import {
  type SocialGraphProfile,
  useFollowers,
  useFollows,
} from "@atprotobrew/common/user/modules/useSocialGraph";
import { Trans, useLingui } from "@lingui/react/macro";
import { useState } from "react";
import { Link } from "react-router-dom";

type Tab = "follows" | "followers";

interface SocialGraphProps {
  client: Client;
  currentUserDid: string;
}

export function SocialGraph({ client, currentUserDid }: SocialGraphProps) {
  const { t } = useLingui();
  const [activeTab, setActiveTab] = useState<Tab>("follows");

  const followsQuery = useFollows(currentUserDid, client);
  const followersQuery = useFollowers(currentUserDid, client);
  const { handleFollow, handleUnfollow, resolvedFollowUri, isMutating } =
    useFollowActions(client);

  const activeQuery = activeTab === "follows" ? followsQuery : followersQuery;

  const profiles: SocialGraphProfile[] =
    activeTab === "follows"
      ? (followsQuery.data?.pages.flatMap((page) => page.follows) ?? [])
      : (followersQuery.data?.pages.flatMap((page) => page.followers) ?? []);

  return (
    <div className="relative w-full min-h-screen font-sans bg-bg">
      <div className="flex flex-col min-h-screen max-w-xl mx-auto">
        <header className="flex items-center gap-4 px-4 py-3 shrink-0 sticky top-0 z-10 bg-bg/80 backdrop-blur-md border-b border-bgContrast25">
          <Link
            to="/"
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-bgContrast25 transition-colors"
            aria-label={t`戻る`}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4 text-textContrastMedium"
            >
              <path
                d="M10 3.5L5.5 8 10 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className="text-base font-bold text-text">
            <Trans>ソーシャルグラフ</Trans>
          </h1>
        </header>

        <div className="flex border-b border-bgContrast25">
          {(["follows", "followers"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                "flex-1 py-3 text-sm font-medium transition-colors border-b-2",
                activeTab === tab
                  ? "text-accent border-accent"
                  : "text-textContrastMedium border-transparent hover:text-text",
              ].join(" ")}
            >
              {tab === "follows" ? (
                <Trans>フォロー中</Trans>
              ) : (
                <Trans>フォロワー</Trans>
              )}
            </button>
          ))}
        </div>

        <main className="flex-1">
          {activeQuery.isPending ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : activeQuery.isError ? (
            <div className="flex justify-center items-center py-12">
              <p className="text-textContrastMedium text-sm">
                <Trans>読み込みエラー</Trans>
              </p>
            </div>
          ) : profiles.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <p className="text-textContrastMedium text-sm">
                {activeTab === "follows" ? (
                  <Trans>フォロー中のユーザーがいません</Trans>
                ) : (
                  <Trans>フォロワーがいません</Trans>
                )}
              </p>
            </div>
          ) : (
            <ul>
              {profiles.map((profile) => {
                const followUri = resolvedFollowUri(profile);
                const isFollowing = followUri !== null;
                const isSelf = currentUserDid === profile.did;
                const isMut = isMutating(profile.did);
                const displayName = profile.displayName ?? profile.handle;

                return (
                  <li
                    key={profile.did}
                    className="flex items-center gap-3 px-4 py-3 border-b border-bgContrast25"
                  >
                    {profile.avatar ? (
                      <img
                        src={profile.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-bgContrast50 shrink-0" />
                    )}

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text truncate">
                        {displayName}
                      </p>
                      <p className="text-xs text-textContrastMedium truncate">
                        @{profile.handle}
                      </p>
                    </div>

                    {!isSelf && (
                      <button
                        type="button"
                        disabled={isMut}
                        onClick={() => {
                          if (isFollowing && followUri) {
                            handleUnfollow(profile.did, followUri);
                          } else {
                            handleFollow(profile.did);
                          }
                        }}
                        className={[
                          "shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                          isFollowing
                            ? "bg-bgContrast25 text-text hover:bg-bgContrast50"
                            : "bg-primary text-bg hover:opacity-80",
                          isMut
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer",
                        ].join(" ")}
                      >
                        {isMut ? (
                          <span className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                        ) : isFollowing ? (
                          <Trans>フォロー中</Trans>
                        ) : (
                          <Trans>フォロー</Trans>
                        )}
                      </button>
                    )}
                  </li>
                );
              })}

              {activeQuery.hasNextPage && (
                <li className="flex justify-center py-4">
                  <button
                    type="button"
                    onClick={() => activeQuery.fetchNextPage()}
                    disabled={activeQuery.isFetchingNextPage}
                    className="px-6 py-2 text-sm text-primary border border-accent rounded-full hover:bg-accent/10 transition-colors disabled:opacity-50"
                  >
                    {activeQuery.isFetchingNextPage ? (
                      <span className="inline-block w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Trans>もっと見る</Trans>
                    )}
                  </button>
                </li>
              )}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}
