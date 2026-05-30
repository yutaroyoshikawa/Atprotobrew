import { XStack, ToggleGroup, XGroup, Text, useTheme } from "tamagui";
import { Sun, Moon, Smartphone } from "lucide-react-native";
import { useThemeToggle } from "../../styles/theme/useThemeToggle";
import { isTheme, type ThemeOverride } from "../../styles/theme/types";
import { useLingui } from "@lingui/react/macro";

export function ThemeToggle() {
  const { t } = useLingui();
  const theme = useTheme();
  const { override, setOverride } = useThemeToggle();

  const options: Array<{ value: ThemeOverride; label: string; Icon: typeof Sun }> = [
    { value: "light", label: t`ライト`, Icon: Sun },
    { value: "dark", label: t`ダーク`, Icon: Moon },
    { value: "system", label: t`システム`, Icon: Smartphone },
  ];

  return (
    <ToggleGroup
      type="single"
      value={override}
      onValueChange={(value) => isTheme(value) && setOverride(value)}
      borderRadius={9999}
      overflow="hidden"
      backgroundColor="$bg"
      width="100%"
    >
      <XGroup width="100%" justifyContent="space-between">
        {options.map(({ value, label, Icon }) => (
          <XGroup.Item key={value}>
            {/* @ts-ignore ToggleGroup.Item produces an overly complex union type in Tamagui 2.x */}
            <ToggleGroup.Item value={value} flex={1} alignItems="center">
              <XStack style={{ flex: 1, alignItems: "center", columnGap: 4 }}>
                <Icon color={theme.text.val} />
                <Text fontWeight="700" color="$text">
                  {label}
                </Text>
              </XStack>
            </ToggleGroup.Item>
          </XGroup.Item>
        ))}
      </XGroup>
    </ToggleGroup>
  );
}
