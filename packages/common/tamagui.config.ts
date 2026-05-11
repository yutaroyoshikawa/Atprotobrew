import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui } from "tamagui";

export const config = createTamagui({
  ...defaultConfig,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: "#000",
    },
    dark: {
      bg: "#111",
      color: "#fff",
    },
    // sub-themes are a powerful feature of tamagui, explained later in the docs
    // user theme like <Theme name="dark"><Theme name="blue">
    // or just <Theme name="dark_blue">
    dark_blue: {
      bg: "darkblue",
      color: "#fff",
    },
  },
  media: {
    ...defaultConfig.media,
    // add your own media queries here, if wanted
  },
});

type OurConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends OurConfig {}
}
