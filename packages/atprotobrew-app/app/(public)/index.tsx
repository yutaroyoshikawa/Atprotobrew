import { AppButton } from "@atprotobrew/common/core/components/AppButton";
import { AppH1 } from "@atprotobrew/common/core/components/AppH1";
import { AppText } from "@atprotobrew/common/core/components/AppText";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <AppVStack>
        <AppH1>Atprotobrew</AppH1>
        <AppText>ようこそ</AppText>

        <AppButton onPress={() => router.push("/(auth)/login")}>
          Login
        </AppButton>
      </AppVStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
});

export default Home;
