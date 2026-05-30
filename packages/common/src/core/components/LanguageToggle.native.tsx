import { useLanguage } from "../modules/i18n";
import type { AppLanguage } from "../types/i18n";
import { Picker, Row, Spacer, Text } from "@expo/ui";
import { useTheme } from "tamagui";

const options = [
  { value: "ja", label: "日本語" },
  { value: "en", label: "English" },
] as const satisfies Array<{
  value: AppLanguage;
  label: string;
}>;

export function LanguageToggle() {
  const t = useTheme();
  const [language, setLanguage] = useLanguage();

  return (
    <Row alignment="center" style={{ padding: 16 }}>
      <Text
        style={{ paddingRight: 16 }}
        textStyle={{ fontWeight: "bold", color: t.text.get() }}
      >
        Language
      </Text>
      <Spacer flexible />
      <Picker selectedValue={language} onValueChange={setLanguage}>
        {options.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </Row>
  );
}
