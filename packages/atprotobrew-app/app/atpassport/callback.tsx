import { ActivityIndicator } from "react-native";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";

function OAuthCallback() {
  return (
    <AppVStack>
      <ActivityIndicator />
    </AppVStack>
  );
}

export default OAuthCallback;
