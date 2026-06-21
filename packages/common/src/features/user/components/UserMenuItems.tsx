import { useLingui } from "@lingui/react/macro";
import { LogOut } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { atoms as a } from "../../../styles/alf";
import { useThemeColors } from "../../../styles/theme";

interface UserMenuItemsProps {
  onLogout: () => void | Promise<void>;
  onDismiss: () => void;
}

export function UserMenuItems({ onLogout, onDismiss }: UserMenuItemsProps) {
  const tc = useThemeColors();
  const { t } = useLingui();

  const handleLogout = async () => {
    onDismiss();
    await onLogout();
  };

  return (
    <View>
      <Pressable
        onPress={handleLogout}
        accessibilityRole="button"
        accessibilityLabel={t`ログアウト`}
        style={({ pressed }) => [
          a.flex_row,
          a.items_center,
          {
            gap: 12,
            paddingVertical: 16,
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        <LogOut size={20} color={tc.textContrastMedium} />
        <Text style={{ color: tc.text, fontSize: 16 }}>{t`ログアウト`}</Text>
      </Pressable>
    </View>
  );
}
