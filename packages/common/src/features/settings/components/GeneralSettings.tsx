import { Host, FieldGroup, Row, Text, Spacer } from "@expo/ui";
import { ThemeToggle, useThemeToggle } from "../../../styles/theme";
import { LanguageToggle } from "../../../core/components/LanguageToggle";
import { t } from "@lingui/core/macro";
import { View } from "react-native";

export function GeneralSettings() {
  const { resolved } = useThemeToggle();

  return (
    <Host colorScheme={resolved} style={{ flex: 1 }} useViewportSizeMeasurement>
      <FieldGroup>
        <FieldGroup.Section title="表示">
          <Row alignment="center" style={{ padding: 16 }}>
            <Text
              style={{ paddingRight: 16 }}
              textStyle={{ fontWeight: "bold" }}
            >
              テーマ
            </Text>
            <Spacer flexible />
            <View style={{ width: 270, marginInline: "auto" }}>
              <ThemeToggle />
            </View>
          </Row>

          <LanguageToggle />
        </FieldGroup.Section>
      </FieldGroup>
    </Host>
  );
}
