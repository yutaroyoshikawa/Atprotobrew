import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { useEffect } from "react";
import { useAuthContext } from "../../modules/auth/AuthProvider";

function OAuthCallback() {
  const router = useRouter();
  const { authState } = useAuthContext();

  useEffect(() => {
    if (authState.status === "authenticated") {
      router.dismissAll();
    }
  }, [authState.status]);

  return (
    <AppVStack>
      <ActivityIndicator />
    </AppVStack>
  );
}

export default OAuthCallback;
