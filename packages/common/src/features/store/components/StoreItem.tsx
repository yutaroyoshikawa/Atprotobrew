import { CheckIcon } from "lucide-react-native";
import { H3, Image, Text, View, XStack, YStack, useTheme } from "tamagui";
import { atoms as a } from "../../../styles/alf";
import { AppH1 } from "../../../core/components/AppH1";

interface StoreItemProps {
  title: string;
  thumbnail: string;
  author: string;
  description: string;
}

export function StoreItem({
  title,
  thumbnail,
  author,
  description,
}: StoreItemProps) {
  const t = useTheme();

  return (
    <View
      role="listitem"
      height={80}
      style={[
        a.flex_row,
        a.gap_3,
        a.items_center,
        a.p_4,
        a.rounded_md,
        { backgroundColor: t.white.get() },
      ]}
    >
      {/* Thumbnail */}
      <View
        style={[
          a.rounded_xl,
          a.items_center,
          a.justify_center,
          a.overflow_hidden,
          { width: 64, height: 64 },
        ]}
      >
        <Image
          src={thumbnail}
          width={60}
          height={60}
          accessibilityLabel={`${title} のアイコン`}
        />
      </View>

      {/* Body */}
      <YStack style={[a.flex_1, a.gap_1]}>
        <XStack style={[a.items_center, a.gap_2, a.flex_wrap]}>
          <AppH1 style={[a.text_sm, a.font_semibold, { color: t.text.get() }]}>
            {title}
          </AppH1>
        </XStack>

        <Text style={[a.text_xs, { color: t.textContrastLow.get() }]}>
          {author}
        </Text>

        <Text
          style={[a.text_xs, { color: t.textContrastMedium.get() }]}
          numberOfLines={2}
        >
          {description}
        </Text>
      </YStack>

      {/* Installed status */}
      <XStack
        style={[
          a.items_center,
          a.gap_1,
          a.rounded_md,
          a.p_2,
          { backgroundColor: t.white.get() },
        ]}
        accessibilityRole="text"
        accessibilityLabel="インストール済み"
      >
        <Text
          aria-hidden
          style={[a.text_xs, a.font_semibold, { color: t.positive.get() }]}
        >
          Installed
        </Text>
        <CheckIcon color={t.positive.get()} aria-hidden />
      </XStack>
    </View>
  );
}
