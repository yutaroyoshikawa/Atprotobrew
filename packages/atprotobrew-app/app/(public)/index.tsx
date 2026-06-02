import { AppButton } from "@atprotobrew/common/core/components/AppButton";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { useEffect, useState } from "react";
import { atoms as a } from "@atprotobrew/common/alf";
import {
  ThemeToggle,
  useThemeColors,
  useThemeToggle,
} from "@atprotobrew/common/theme";
import { LanguageToggle } from "@atprotobrew/common/core/components/LanguageToggle";
import { BubbleBackground } from "@atprotobrew/common/core/components/Background";
import { AtprotobrewMascot } from "@atprotobrew/common/core/components/AtprotobrewMascot";
import { AtprotobrewLogoType } from "@atprotobrew/common/core/components/AtprotobrewLogoType";
import { Host } from "@expo/ui";

function Home() {
  const { resolved } = useThemeToggle();
  const t = useThemeColors();
  const { authState } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === "authenticated") {
      router.replace("/(app)/home");
    }
  }, [authState.status]);

  return (
    <View>
      <BubbleBackground />

      <View style={[a.h_full, a.w_full, a.justify_center, a.px_4]}>
        <View
          style={[
            a.h_full,
            a.w_full,
            a.flex_col,
            a.justify_between,
            a.px_4,
            a.py_4,
            { maxHeight: 700, maxWidth: 400 },
          ]}
        >
          <View style={[a.flex_1, a.flex_col, a.justify_center]}>
            <View style={[a.flex_col, a.gap_4, { height: 200 }]}>
              <View style={[a.flex_1]}>
                <AtprotobrewMascot />
              </View>
              <View style={[a.flex_1]}>
                <AtprotobrewLogoType />
              </View>
            </View>
          </View>

          <View
            style={[
              { maxHeight: 270 },
              a.flex_1,
              a.flex_col,
              a.justify_between,
              a.gap_4,
            ]}
          >
            {authState.status === "unauthenticated" && (
              <AppButton onPress={() => router.push("/(auth)/login")}>
                Login
              </AppButton>
            )}

            {authState.status === "loading" && <ActivityIndicator />}

            <View style={[a.flex_col, a.justify_between, a.gap_4]}>
              <ThemeToggle />
              <View
                style={{
                  height: 80,
                  backgroundColor: t.bg,
                  borderRadius: 12,
                  paddingInline: 8,
                }}
              >
                <Host
                  useViewportSizeMeasurement
                  colorScheme={resolved}
                  style={{
                    flex: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <LanguageToggle />
                </Host>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
