import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";
import type { AuthState } from "./useAuth";
import { useAuth } from "./useAuth";
import { useLocale } from "@atprotobrew/common/core/modules/i18n";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { AuthForm } from "@atprotobrew/common/auth/components/AuthForm";
import { loginWithAtPassport } from "./atpassport";
import { usePathname, useRouter } from "expo-router";

interface AuthContextValue {
  authState: AuthState;
  login: (handle: string, handleResolver: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const values = useAuth();

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return ctx;
}
