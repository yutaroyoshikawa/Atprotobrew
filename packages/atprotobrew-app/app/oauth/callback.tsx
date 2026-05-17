import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { useEffect } from "react";

function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    router.dismissAll();
  });

  return (
    <AppVStack>
      <ActivityIndicator />
    </AppVStack>
  );
}

export default OAuthCallback;
