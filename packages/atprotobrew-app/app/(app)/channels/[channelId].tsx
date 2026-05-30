import { View } from "react-native";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { OAuthSession } from "@atproto/oauth-client-expo";
import { Suspense } from "react";
import { AppH1 } from "@atprotobrew/common/core/components/AppH1";
import { useAuthContext } from "../../../modules/auth/AuthProvider";
import { atoms as a } from "@atprotobrew/common/alf";
import { useLocalSearchParams, useRouter } from "expo-router";
import { AppButton } from "@atprotobrew/common/core/components/AppButton";
import { AppText } from "@atprotobrew/common/core/components/AppText";
import { AppVStack } from "@atprotobrew/common/core/components/AppVStack";
import { Image } from "expo-image";
import { AppCard } from "@atprotobrew/common/core/components/AppCard";
import * as WebBrowser from "expo-web-browser";

export default function Screen() {
  const { authState } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <Suspense>
      <ChannelScreenContent session={authState.session} />
    </Suspense>
  );
}

interface StoreScreenContentProps {
  session: OAuthSession;
}

const openBrowser = async (link: string) => {
  let result = await WebBrowser.openAuthSessionAsync(link);
  console.log(result);
};

function ChannelScreenContent({ session }: StoreScreenContentProps) {
  const router = useRouter();
  const { channelId } = useLocalSearchParams<{ channelId: string }>();

  const { data } = useFetchLaunchers({ agent: session });

  const targetLauncher = data.body.items.find(
    (item) => item.title === channelId,
  );

  if (!targetLauncher) {
    return null;
  }

  const link =
    "link" in targetLauncher.launch ? targetLauncher.launch.link : null;

  return (
    <View
      style={[a.h_full, a.flex_col, a.items_center, a.px_4, a.justify_center]}
    >
      <AppCard style={[a.flex_col, a.items_center, a.px_4, a.justify_center]}>
        <AppVStack style={[a.px_6, a.py_3, a.items_center, a.gap_6, a.w_full]}>
          <View
            style={[
              a.items_center,
              a.justify_center,
              { width: 80, height: 80 },
            ]}
          >
            <Image
              source={targetLauncher.thumbnail}
              style={[{ width: 60, height: 60 }]}
            />
          </View>
          <AppText style={[a.font_bold, a.text_sm, a.text_center]}>
            {targetLauncher.description}
          </AppText>

          <View style={[a.flex_col, a.justify_center, a.items_center, a.gap_3]}>
            <AppH1>{targetLauncher.title}</AppH1>
            {link && <AppText style={[a.text_sm]}>{link}</AppText>}
          </View>

          {link && (
            <AppButton
              onPress={() => openBrowser(link)}
              style={[a.w_full, a.font_medium]}
            >
              起動する
            </AppButton>
          )}

          <AppButton onPress={() => router.back()}>
            <AppText>← ホームに戻る</AppText>
          </AppButton>
        </AppVStack>
      </AppCard>
    </View>
  );
}
