import type { OAuthSession } from "@atproto/oauth-client-expo";
import { atoms as a } from "@atprotobrew/common/alf";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { AppFooter } from "@atprotobrew/common/core/components/AppFooter";
import { BubbleBackground } from "@atprotobrew/common/core/components/Background";
import { router } from "expo-router";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { LauncherScreen } from "../../modules/launcher/LauncherScreen";
import { useWidgetSync } from "../../modules/launcher/useWidgetSync";
import { UserMenuButton } from "../../modules/user/UserMenuButton";

export default function Home() {
  const { authState, logout } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <Suspense fallback={<LoadingView />}>
      <HomeScreenContent session={authState.session} logout={logout} />
    </Suspense>
  );
}

interface HomeScreenContentProps {
  session: OAuthSession;
  logout: () => Promise<void>;
}

function HomeScreenContent({ session, logout }: HomeScreenContentProps) {
  const { data } = useFetchLaunchers({ agent: session });
  useWidgetSync();

  return (
    <View style={[a.h_full]}>
      <BubbleBackground />
      <View style={[a.h_full, a.flex_col]}>
        <LauncherScreen storeViews={data.body.items} />
        <AppFooter
          onRequestOpenSettings={() => router.push("/(app)/settings")}
          onRequestOpenSocialGraph={() => router.push("/(app)/social-graph")}
        />
      </View>
      <UserMenuButton did={session.sub} onLogout={logout} />
    </View>
  );
}

function LoadingView() {
  return (
    <View style={[a.h_full, a.justify_center]}>
      <ActivityIndicator />
    </View>
  );
}
