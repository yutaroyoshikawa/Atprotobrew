import { useLingui } from "@lingui/react/macro";
import { LogOut, User } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { atoms as a } from "../../../styles/alf";
import { useThemeColors } from "../../../styles/theme";

interface UserMenuItemsProps {
	onLogout: () => void | Promise<void>;
	onDismiss: () => void;
	onNavigateToProfile?: () => void;
}

export function UserMenuItems({ onLogout, onDismiss, onNavigateToProfile }: UserMenuItemsProps) {
	const tc = useThemeColors();
	const { t } = useLingui();

	const handleLogout = async () => {
		onDismiss();
		await onLogout();
	};

	const handleNavigateToProfile = () => {
		onDismiss();
		onNavigateToProfile?.();
	};

	return (
		<View>
			{onNavigateToProfile && (
				<Pressable
					onPress={handleNavigateToProfile}
					accessibilityRole="button"
					accessibilityLabel={t`プロフィール`}
					style={({ pressed }) => [
						a.flex_row,
						a.items_center,
						{
							gap: 12,
							paddingVertical: 16,
							borderBottomWidth: 1,
							borderBottomColor: tc.bgContrast25,
							opacity: pressed ? 0.7 : 1,
						},
					]}
				>
					<User size={20} color={tc.textContrastMedium} />
					<Text style={{ color: tc.text, fontSize: 16 }}>{t`プロフィール`}</Text>
				</Pressable>
			)}

			<Pressable
				onPress={handleLogout}
				accessibilityRole="button"
				accessibilityLabel={t`ログアウト`}
				style={({ pressed }) => [
					a.flex_row,
					a.items_center,
					{ gap: 12, paddingVertical: 16, opacity: pressed ? 0.7 : 1 },
				]}
			>
				<LogOut size={20} color={tc.textContrastMedium} />
				<Text style={{ color: tc.text, fontSize: 16 }}>{t`ログアウト`}</Text>
			</Pressable>
		</View>
	);
}
