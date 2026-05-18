import { type ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Atprotobrew",
  slug: "atprotobrew-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "org.tarororo.brew",
  userInterfaceStyle: "automatic",
  ios: {
    googleServicesFile:
      process.env.GOOGLE_SERVICES_INFO_PLIST ?? "./GoogleService-Info.plist",
    supportsTablet: true,
    bundleIdentifier: "org.tarororo.brew",
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    googleServicesFile:
      process.env.GOOGLE_SERVICES_JSON ?? "./google-services.json",
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    predictiveBackGestureEnabled: false,
    package: "org.tarororo.brew",
  },
  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
    "expo-image",
    "expo-web-browser",
    "@react-native-firebase/app",
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
          newArchEnabled: true,
        },
        android: { newArchEnabled: true },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: "63a971a5-2562-4365-ba5c-6840572bcaee",
    },
  },
};

export default config;
