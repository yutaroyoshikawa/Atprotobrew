import { TamaguiProvider } from "@tamagui/core";
import { type ReactNode } from "react";
import { config } from "../../../tamagui.config";

interface UIProviderProps {
  children: ReactNode;
}

export function UIProvider({ children }: UIProviderProps) {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      {children}
    </TamaguiProvider>
  );
}
