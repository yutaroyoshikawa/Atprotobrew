import { TamaguiProvider } from "tamagui";
import { type ReactNode } from "react";
import { tamaguiConfig } from "../../../tamagui.config";
import { ThemeProvider } from "./ThemeProvider";

interface UIProviderProps {
  children: ReactNode;
}

export function UIProvider({ children }: UIProviderProps) {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <ThemeProvider>{children}</ThemeProvider>
    </TamaguiProvider>
  );
}
