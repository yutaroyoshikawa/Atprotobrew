import { Stack } from "expo-router";
import { UIProvider } from "@atprotobrew/common/core/components/UIProvider";
import { AppQueryProvider } from "@atprotobrew/common/core/components/AppQueryProvider";
import { getAppQueryClient } from "@atprotobrew/common/core/modules/appQuery";

const queryClient = getAppQueryClient();

export default function RootLayout() {
  return (
    <UIProvider>
      <AppQueryProvider client={queryClient}>
        <Stack />
      </AppQueryProvider>
    </UIProvider>
  );
}
