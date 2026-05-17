import "../modules/polyfill";
import { AppI18nProvider } from "@atprotobrew/common/core/components/AppI18nProvider";
import { AppQueryProvider } from "@atprotobrew/common/core/components/AppQueryProvider";
import { UIProvider } from "@atprotobrew/common/core/components/UIProvider";
import { getAppQueryClient } from "@atprotobrew/common/core/modules/appQuery";
import type { CatalogLoader } from "@atprotobrew/common/core/types/i18n";
import { Stack } from "expo-router";
import { AuthProvider } from "../modules/auth/AuthProvider";

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
    <AppI18nProvider extraLoaders={[catalogLoader]}>
      <UIProvider>
        <AppQueryProvider client={queryClient}>
          <AuthProvider>
            <Stack />
          </AuthProvider>
        </AppQueryProvider>
      </UIProvider>
    </AppI18nProvider>
  );
}
