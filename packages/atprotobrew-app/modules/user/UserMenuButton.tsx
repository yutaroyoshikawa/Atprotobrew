import type { AtprotoDid } from "@atproto/oauth-client-expo";
import { modeAtom } from "@atprotobrew/common/launcher/launcherStore";
import { useThemeColors } from "@atprotobrew/common/theme";
import { UserMenuItems } from "@atprotobrew/common/user/components/UserMenuItems";
import { UserMenuTrigger } from "@atprotobrew/common/user/components/UserMenuTrigger";
import { type BottomSheetMethods, BottomSheetModal, BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { router } from "expo-router";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface UserMenuButtonProps {
	did: AtprotoDid;
	onLogout: () => void | Promise<void>;
}

export function UserMenuButton({ did, onLogout }: UserMenuButtonProps) {
	const mode = useAtomValue(modeAtom);
	const tc = useThemeColors();
	const insets = useSafeAreaInsets();
	const sheetRef = useRef<BottomSheetMethods>(null);

	if (mode === "EDIT") {
		return null;
	}

	const handleNavigateToProfile = () => {
		router.push({ pathname: "/(app)/profile/[did]", params: { did } });
	};

	return (
		<>
			<View style={[styles.triggerWrapper, { top: insets.top + 8, right: 16 }]}>
				<UserMenuTrigger actor={did} onPress={() => sheetRef.current?.present()} />
			</View>

			<BottomSheetModal
				ref={sheetRef}
				enableDynamicSizing
				enablePanDownToClose
				backgroundStyle={{ backgroundColor: tc.bgContrast25 }}
				handleIndicatorStyle={{ backgroundColor: tc.textContrastLow }}
			>
				<BottomSheetView style={[styles.sheetContent, { paddingBottom: insets.bottom + 16 }]}>
					<UserMenuItems
						onLogout={onLogout}
						onDismiss={() => sheetRef.current?.dismiss()}
						onNavigateToProfile={handleNavigateToProfile}
					/>
				</BottomSheetView>
			</BottomSheetModal>
		</>
	);
}

const styles = StyleSheet.create({
	triggerWrapper: {
		position: "absolute",
		zIndex: 10,
	},
	sheetContent: {
		paddingHorizontal: 20,
	},
});
