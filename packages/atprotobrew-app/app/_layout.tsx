import { Stack } from "expo-router";
import { UIProvider } from "@atprotobrew/common/core/components/UIProvider";
import { AppQueryProvider } from "@atprotobrew/common/core/components/AppQueryProvider";
import { getAppQueryClient } from "@atprotobrew/common/core/modules/appQuery";
import { AppI18nProvider } from "@atprotobrew/common/core/components/AppI18nProvider";
import { CatalogLoader } from "@atprotobrew/common/core/types/i18n";

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
          <Stack />
        </AppQueryProvider>
      </UIProvider>
    </AppI18nProvider>
  );
}
