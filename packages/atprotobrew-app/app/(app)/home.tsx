import { Suspense } from "react";
import { View, ActivityIndicator } from "react-native";
import type { OAuthSession } from "@atproto/oauth-client-expo";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { LauncherScreen } from "../../modules/launcher/LauncherScreen";
import { atoms as a } from "@atprotobrew/common/alf";
import { BubbleBackground } from "@atprotobrew/common/core/components/Background";
import { router } from "expo-router";
import { AppFooter } from "@atprotobrew/common/core/components/AppFooter";

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

  return (
    <View style={[a.h_full]}>
      <BubbleBackground />
      <View style={[a.h_full, a.flex_col]}>
        <LauncherScreen storeViews={data.body.items} />
        <AppFooter
          onRequestOpenSettings={() => router.push("/(app)/settings")}
          onRequestLogout={logout}
        />
      </View>
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
