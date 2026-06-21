import { Settings, Users } from "lucide-react-native";
import { styled, useTheme, View, XStack } from "tamagui";
import { AppButton } from "./AppButton";
import { AtprotobrewLogoType } from "./AtprotobrewLogoType";

interface AppFooterProps {
	onRequestOpenSettings?: () => void;
	onRequestOpenSocialGraph?: () => void;
}

export function AppFooter({ onRequestOpenSettings, onRequestOpenSocialGraph }: AppFooterProps) {
	const t = useTheme();

	return (
		<StyledWrapper>
			<Background />

			<StyledNavigation>
				<AppButton onPress={onRequestOpenSettings} shape="circle" size="large" aria-label="設定">
					<Settings color={t.textContrastMedium.val} />
				</AppButton>

				<View height={80} width={120} paddingTop="$4">
					<AtprotobrewLogoType />
				</View>

				<AppButton onPress={onRequestOpenSocialGraph} shape="circle" size="large" aria-label="ソーシャルグラフ">
					<Users color={t.textContrastMedium.val} />
				</AppButton>
			</StyledNavigation>
		</StyledWrapper>
	);
}

const StyledWrapper = styled(View, {
	width: "100%",
	position: "relative",
});

const StyledNavigation = styled(XStack, {
	width: "100%",
	height: 50,
	alignItems: "center",
	justifyContent: "space-between",
	paddingHorizontal: "$5",
	paddingBottom: "$10",
	zIndex: 1,
});

const Background = styled(View, {
	position: "absolute",
	zIndex: 0,
	bottom: 0,
	width: "100%",
	height: 80,
	backgroundColor: "$bg",
});
