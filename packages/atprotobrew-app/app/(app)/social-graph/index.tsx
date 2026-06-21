import { atoms as a } from "@atprotobrew/common/alf";
import { SocialGraphList } from "@atprotobrew/common/user/components/SocialGraphList";
import { View } from "react-native";
import { useAuthContext } from "../../../modules/auth/AuthProvider";

function Screen() {
  const { authState } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <View style={[a.h_full, a.w_full]}>
      <SocialGraphList
        actor={authState.session.sub}
        agent={authState.session}
        currentUserDid={authState.session.sub}
      />
    </View>
  );
}

export default Screen;
