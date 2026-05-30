import { View } from "react-native";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { OAuthSession } from "@atproto/oauth-client-expo";
import { Suspense, useState } from "react";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { StoreChannelTile } from "@atprotobrew/common/channel/components/StoreChannelTile";
import { InstalledChannelTile } from "@atprotobrew/common/channel/components/InstalledChannelTile";
import { AppFooter } from "@atprotobrew/common/core/components/AppFooter";
import { useRouter } from "expo-router";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { atoms as a } from "@atprotobrew/common/alf";
import { BubbleBackground } from "@atprotobrew/common/core/components/Background";

export default function Index() {
  const { authState, logout } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <Suspense>
      <HomeScreenContent session={authState.session} logout={logout} />
    </Suspense>
  );
}

const TOTAL_TILES = 6;

interface HomeScreenContentProps {
  session: OAuthSession;
  logout: () => Promise<void>;
}

function HomeScreenContent({ session, logout }: HomeScreenContentProps) {
  const router = useRouter();
  const { data } = useFetchLaunchers({ agent: session });

  const installChannels = data.body.view;

  const [page] = useState(0);

  const tilesPerPage = TOTAL_TILES;

  const pageChannels = installChannels.slice(
    page * (tilesPerPage - 1),
    (page + 1) * (tilesPerPage - 1),
  );

  return (
    <View style={[a.h_full]}>
      <BubbleBackground />
      <AppVStack style={[a.h_full, a.flex_col, a.justify_between]}>
        <AppVStack style={[a.p_4, a.flex_col, a.gap_3]}>
          <StoreChannelTile onPress={() => router.push("/(app)/store")} />

          {pageChannels.map((tile) => (
            <InstalledChannelTile
              key={tile.uri}
              channelName={tile.title}
              thumbnailUrl={tile.thumbnail}
              onPress={() =>
                router.push({
                  pathname: "/(app)/channels/[channelId]",
                  params: { channelId: tile.title },
                })
              }
            />
          ))}
        </AppVStack>

        <View>
          <AppFooter
            onRequestOpenSettings={() => router.push("/(app)/settings")}
            onRequestLogout={logout}
          />
        </View>
      </AppVStack>
    </View>
  );
}
