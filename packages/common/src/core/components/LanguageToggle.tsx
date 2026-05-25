import { XStack, Button } from "tamagui";
import { useLanguage } from "../modules/i18n";
import type { AppLanguage } from "../types/i18n";

const options = [
  { value: "ja", label: "日本語" },
  { value: "en", label: "English" },
] as const satisfies Array<{
  value: AppLanguage;
  label: string;
}>;

export function LanguageToggle() {
  const [language, setLanguage] = useLanguage();

  return (
    <XStack width="100%" gap="$2" backgroundColor="$color4" borderRadius="$3">
      {options.map(({ value, label }) => (
        <Button
          key={value}
          flex={1}
          size="$3"
          onPress={() => setLanguage(value)}
          disabled={value === language}
          aria-label={label}
        >
          {label}
        </Button>
      ))}
    </XStack>
  );
}
