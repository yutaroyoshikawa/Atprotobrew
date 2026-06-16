import { themes } from "@atprotobrew/tokens/themes";
import LauncherWidget from "../../widgets/ios/LauncherWidget";
import type { WidgetSync } from "./widgetSync";

// expo-widgets の push モデル。ライブラリが App Group への書き込みと WidgetKit reload を担う。
// snapshot は rowsBySize まで確定済みなのでそのまま渡す
const widgetSyncImpl: WidgetSync = {
  push: async (snapshot) => {
    const props = {
      ...snapshot,
      color: {
        light: {
          bg: themes.light.bg,
          cardBg: themes.light.bgContrast50,
        },
        dark: {
          bg: themes.dark.bg,
          cardBg: themes.dark.bgContrast50,
        },
      },
    };

    LauncherWidget.updateSnapshot(props);
  },
};

export const widgetSync = widgetSyncImpl;
