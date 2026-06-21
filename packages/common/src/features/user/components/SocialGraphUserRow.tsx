import type { DidString } from "@atproto/lex";
import { useLingui } from "@lingui/react/macro";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import { atoms as a } from "../../../styles/alf";
import { useThemeColors } from "../../../styles/theme";
import type { SocialGraphProfile } from "../modules/useSocialGraph";

interface SocialGraphUserRowProps {
  profile: SocialGraphProfile;
  currentUserDid: string | undefined;
  followUri: string | null | undefined;
  onFollow: (did: DidString) => void;
  onUnfollow: (followUri: string) => void;
  isMutating: boolean;
}

export function SocialGraphUserRow({
  profile,
  currentUserDid,
  followUri,
  onFollow,
  onUnfollow,
  isMutating,
}: SocialGraphUserRowProps) {
  const tc = useThemeColors();
  const { t } = useLingui();

  const isSelf = currentUserDid === profile.did;
  const isFollowing = followUri !== null && typeof followUri !== "undefined";
  const effectiveFollowUri = followUri;

  const handlePress = () => {
    if (isFollowing && effectiveFollowUri) {
      onUnfollow(effectiveFollowUri);
    } else {
      onFollow(profile.did);
    }
  };

  const buttonLabel = isFollowing ? t`フォロー中` : t`フォロー`;
  const displayName = profile.displayName ?? profile.handle;

  return (
    <View
      style={[
        a.flex_row,
        a.items_center,
        {
          paddingHorizontal: 16,
          paddingVertical: 12,
          gap: 12,
          borderBottomWidth: 1,
          borderBottomColor: tc.bgContrast25,
        },
      ]}
    >
      {profile.avatar ? (
        <Image
          source={{ uri: profile.avatar }}
          style={{ width: 44, height: 44, borderRadius: 22 }}
        />
      ) : (
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: tc.bgContrast50,
          }}
        />
      )}

      <View style={[a.flex_1]}>
        <Text
          style={{ color: tc.text, fontSize: 15, fontWeight: "600" }}
          numberOfLines={1}
        >
          {displayName}
        </Text>
        <Text
          style={{ color: tc.textContrastMedium, fontSize: 13, marginTop: 2 }}
          numberOfLines={1}
        >
          @{profile.handle}
        </Text>
      </View>

      {!isSelf && (
        <Pressable
          onPress={handlePress}
          disabled={isMutating}
          accessibilityRole="button"
          accessibilityLabel={buttonLabel}
          style={({ pressed }) => ({
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 999,
            backgroundColor: isFollowing ? tc.bgContrast25 : tc.primary,
            opacity: pressed || isMutating ? 0.6 : 1,
            minWidth: 80,
            alignItems: "center" as const,
            justifyContent: "center" as const,
          })}
        >
          {isMutating ? (
            <ActivityIndicator
              size="small"
              color={isFollowing ? tc.text : tc.bg}
            />
          ) : (
            <Text
              style={{
                color: isFollowing ? tc.text : tc.bg,
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              {buttonLabel}
            </Text>
          )}
        </Pressable>
      )}
    </View>
  );
}
