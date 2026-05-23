import { XStack, Button } from "tamagui";
import { Sun, Moon, Smartphone } from "lucide-react-native";
import { useThemeToggle } from "./useThemeToggle";
import type { ThemeOverride } from "./types";

const options: Array<{
  value: ThemeOverride;
  label: string;
  Icon: typeof Sun;
}> = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Smartphone },
];

/**
 * 3状態 Theme トグル UI (Tamagui)。
 * light / dark / system を切り替え可能。
 * web/native 共通で使用。
 */
export function ThemeToggle() {
  const { setOverride } = useThemeToggle();

  return (
    <XStack gap="$2" backgroundColor="$color4" borderRadius="$3">
      {options.map(({ value, label, Icon }) => (
        <Button
          key={value}
          flex={1}
          size="$3"
          onPress={() => setOverride(value)}
          icon={<Icon size={16} />}
          aria-label={label}
        >
          {label}
        </Button>
      ))}
    </XStack>
  );
}
