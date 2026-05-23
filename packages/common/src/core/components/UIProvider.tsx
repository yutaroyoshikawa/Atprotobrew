import { TamaguiProvider } from "@tamagui/core";
import { type ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";
import { tamaguiConfig } from "../../../tamagui.config";
import { ThemeProvider } from "../../styles/theme/ThemeProvider";

interface UIProviderProps {
  children: ReactNode;
}

export function UIProvider({ children }: UIProviderProps) {
  return (
    <JotaiProvider>
      <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
        <ThemeProvider>{children}</ThemeProvider>
      </TamaguiProvider>
    </JotaiProvider>
  );
}
