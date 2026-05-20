import { ActivityIndicator, BackHandler } from "react-native";
import { Stack } from "expo-router";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { useEffect } from "react";

function OAuthCallback() {
  // Block Android hardware back button while auth is in progress.
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true,
    );

    return () => subscription.remove();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
          headerLeft: () => null,
        }}
      />
      <AppVStack>
        <ActivityIndicator />
      </AppVStack>
    </>
  );
}

export default OAuthCallback;
