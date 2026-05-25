import { View } from "react-native";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { atoms as a } from "@atprotobrew/common/alf";
import { useAuthContext } from "../../../modules/auth/AuthProvider";
import { ThemeToggle } from "@atprotobrew/common/theme";
import { LanguageToggle } from "@atprotobrew/common/core/components/LanguageToggle";

function Screen() {
  const { authState } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return <ScreenContent />;
}

export default Screen;

function ScreenContent() {
  return (
    <View style={[a.h_full]}>
      <AppVStack style={[a.h_full, a.flex_col, a.gap_2, a.p_6]}>
        <ThemeToggle />
        <LanguageToggle />
      </AppVStack>
    </View>
  );
}
