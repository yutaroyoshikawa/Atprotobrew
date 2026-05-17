import { AuthForm } from "@atprotobrew/common/auth/components/AuthForm";
import { useLocale } from "@atprotobrew/common/core/modules/i18n";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { loginWithAtPassport } from "../modules/auth/atpassport";
import { useAuthContext } from "../modules/auth/AuthProvider";

export default function Index() {
  const { authState, login, logout } = useAuthContext();
  const locale = useLocale();

  if (authState.status === "loading") {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (authState.status === "unauthenticated") {
    return (
      <View style={styles.center}>
        <AuthForm
          onSubmit={async ({ handle, handleResolver }) => {
            await login(handle, handleResolver);
          }}
          onAtPassportLogin={() => loginWithAtPassport(locale, login)}
        />
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.did}>{authState.sub}</Text>
      <Button title="ログアウト" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  did: {
    marginBottom: 16,
    fontSize: 14,
    color: "#555",
  },
});
