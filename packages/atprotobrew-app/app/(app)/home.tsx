import { StyleSheet, View } from "react-native";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { OAuthSession } from "@atproto/oauth-client-expo";
import { Suspense, useState } from "react";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { StoreChannelTile } from "@atprotobrew/common/channel/components/StoreChannelTile";
import { InstalledChannelTile } from "@atprotobrew/common/channel/components/InstalledChannelTile";
import { AppFooter } from "@atprotobrew/common/core/components/AppFooter";
import { Link } from "expo-router";
import { useAuthContext } from "../../modules/auth/AuthProvider";

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

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  did: {
    marginBottom: 16,
    fontSize: 14,
    color: "#555",
  },
});

const TOTAL_TILES = 6;

interface HomeScreenContentProps {
  session: OAuthSession;
  logout: () => Promise<void>;
}

function HomeScreenContent({ session, logout }: HomeScreenContentProps) {
  const { data } = useFetchLaunchers({ agent: session });

  const installChannels = data.body.view;

  const [page] = useState(0);

  const tilesPerPage = TOTAL_TILES;

  const pageChannels = installChannels.slice(
    page * (tilesPerPage - 1),
    (page + 1) * (tilesPerPage - 1),
  );

  return (
    <View style={styles.center}>
      <AppVStack>
        <AppVStack>
          <StoreChannelTile render={(props) => <Link {...props} href="/" />} />
          {pageChannels.map((tile) => (
            <InstalledChannelTile
              key={tile.uri}
              channelName={tile.title}
              thumbnailUrl={tile.thumbnail}
              render={(props) => <Link {...props} href={`/`} />}
            />
          ))}
        </AppVStack>

        <View>
          <AppFooter onRequestLogout={logout} />
        </View>
      </AppVStack>
    </View>
  );
}
