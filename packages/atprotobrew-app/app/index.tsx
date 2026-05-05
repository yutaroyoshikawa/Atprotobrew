import { View } from "react-native";
import { AuthForm } from "@atprotobrew/common/auth/components/AuthForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthForm />
    </View>
  );
}
