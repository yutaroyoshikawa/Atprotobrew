import { FieldGroup, Host, Row, Spacer, Text } from "@expo/ui";
import { View } from "react-native";
import { LanguageToggle } from "../../../core/components/LanguageToggle";
import { ThemeToggle, useThemeToggle } from "../../../styles/theme";

export function GeneralSettings() {
	const { resolved } = useThemeToggle();

	return (
		<Host colorScheme={resolved} style={{ flex: 1 }} useViewportSizeMeasurement>
			<FieldGroup>
				<FieldGroup.Section title="表示">
					<Row alignment="center" style={{ padding: 16 }}>
						<Text style={{ paddingRight: 16 }} textStyle={{ fontWeight: "bold" }}>
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
