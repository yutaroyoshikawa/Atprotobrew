import { AppButton } from "@atprotobrew/common/core/components/AppButton";
import { AppH1 } from "@atprotobrew/common/core/components/AppH1";
import { AppText } from "@atprotobrew/common/core/components/AppText";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { useEffect } from "react";
import { atoms as a } from "@atprotobrew/common/alf";
import { ThemeToggle } from "@atprotobrew/common/theme";

function Home() {
  const { authState } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === "loading") {
      return;
    }

    if (authState.status === "authenticated") {
      router.replace("/(app)/home");
    }
  }, [authState.status]);

  return (
    <View style={[a.flex_1, a.justify_center, a.items_center, a.p_6, a.gap_4]}>
      <AppVStack>
        <AppH1>Atprotobrew</AppH1>
        <AppText>ようこそ</AppText>

        {authState.status === "unauthenticated" && (
          <AppButton onPress={() => router.push("/(auth)/login")}>
            Login
          </AppButton>
        )}

        {authState.status === "loading" && <ActivityIndicator />}
      </AppVStack>

      <ThemeToggle />
    </View>
  );
}

export default Home;
