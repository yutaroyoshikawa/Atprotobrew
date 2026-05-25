import "../modules/polyfill";
import { AppI18nProvider } from "@atprotobrew/common/core/components/AppI18nProvider";
import { AppQueryProvider } from "@atprotobrew/common/core/components/AppQueryProvider";
import { UIProvider } from "@atprotobrew/common/core/components/UIProvider";
import { getAppQueryClient } from "@atprotobrew/common/core/modules/appQuery";
import type { CatalogLoader } from "@atprotobrew/common/core/types/i18n";
import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuthContext } from "../modules/auth/AuthProvider";
import { useEffect } from "react";
import { Provider as JotaiProvider } from "jotai";

const queryClient = getAppQueryClient();

const catalogLoader: CatalogLoader = async (lang) => {
  switch (lang) {
    case "ja":
      return (await import("../locales/ja/messages")).messages;
    case "en":
      return (await import("../locales/en/messages")).messages;
  }
};

export default function RootLayout() {
  return (
    <JotaiProvider>
      <AppI18nProvider extraLoaders={[catalogLoader]}>
        <UIProvider>
          <AppQueryProvider client={queryClient}>
            <AuthProvider>
              <RootLayoutNav />
            </AuthProvider>
          </AppQueryProvider>
        </UIProvider>
      </AppI18nProvider>
    </JotaiProvider>
  );
}

function RootLayoutNav() {
  const { authState } = useAuthContext();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === "loading") {
      return;
    }

    const group = segments[0];

    switch (group) {
      case "(app)": {
        if (authState.status === "unauthenticated") {
          // 未認証で保護領域にいる → ログインへ
          router.replace("/(auth)/login");
        }

        break;
      }
      case "(auth)": {
        if (authState.status === "authenticated") {
          // 認証済みでログイン画面にいる → ホームへ
          router.replace("/(app)/home");
        }

        break;
      }
    }
  }, [authState.status, segments[0]]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
      <Stack.Screen name="(public)" />
    </Stack>
  );
}
