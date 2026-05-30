import { View } from "react-native";
import { atoms as a } from "@atprotobrew/common/alf";
import { useAuthContext } from "../../../modules/auth/AuthProvider";
import { GeneralSettings } from "@atprotobrew/common/settings/components/GeneralSettings";

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
    <View style={[a.h_full, a.w_full]}>
      <GeneralSettings />
    </View>
  );
}
