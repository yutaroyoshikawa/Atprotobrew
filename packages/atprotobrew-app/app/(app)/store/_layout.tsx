import { useLingui } from "@lingui/react/macro";
import { Stack } from "expo-router";

function Layout() {
  const { t } = useLingui();
  return <Stack screenOptions={{ title: t`ストア` }} />;
}

export default Layout;
