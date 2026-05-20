import { AuthForm } from "@atprotobrew/common/auth/components/AuthForm";
import { StyleSheet, View } from "react-native";
import { loginWithAtPassport } from "../../modules/auth/atpassport";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { useLocale } from "@atprotobrew/common/core/modules/i18n";

function Login() {
  const { login } = useAuthContext();
  const locale = useLocale();

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

export default Login;
