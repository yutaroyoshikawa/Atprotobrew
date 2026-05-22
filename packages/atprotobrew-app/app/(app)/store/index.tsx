import { View } from "react-native";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { OAuthSession } from "@atproto/oauth-client-expo";
import { Suspense } from "react";
import { AppH1 } from "@atprotobrew/common/core/components/AppH1";
import { useAuthContext } from "../../../modules/auth/AuthProvider";
import { StoreItem } from "@atprotobrew/common/store/components/StoreItem";
import { atoms as a } from "@atprotobrew/common/alf";

export default function Screen() {
  const { authState } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <Suspense>
      <StoreScreenContent session={authState.session} />
    </Suspense>
  );
}

interface StoreScreenContentProps {
  session: OAuthSession;
}

function StoreScreenContent({ session }: StoreScreenContentProps) {
  const { data } = useFetchLaunchers({ agent: session });

  return (
    <View style={[a.h_full]}>
      <View style={[a.flex_col]}>
        <View style={[a.items_center]}>
          <AppH1>Atprotobrew store</AppH1>
        </View>

        <View style={[a.flex_1, a.w_full, a.px_4, a.py_4]}>
          <View style={[a.flex_col, a.gap_6]}>
            {data.body.view.map((channel) => {
              return (
                <StoreItem
                  key={channel.title}
                  title={channel.title}
                  thumbnail={channel.thumbnail}
                  author={channel.author}
                  description={channel.description}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}
