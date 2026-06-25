import type { AtprotoDid } from "@atproto/did";
import type { OAuthSession } from "@atproto/oauth-client-expo";
import type { StoredAccount } from "@atprotobrew/common/account/types";
import { atoms as a } from "@atprotobrew/common/alf";
import { useFetchLaunchers } from "@atprotobrew/common/channel/modules/launchersHooks";
import { AppFooter } from "@atprotobrew/common/core/components/AppFooter";
import { BubbleBackground } from "@atprotobrew/common/core/components/Background";
import { router } from "expo-router";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthContext } from "../../modules/auth/AuthProvider";
import { LauncherScreen } from "../../modules/launcher/LauncherScreen";
import { UserMenuButton } from "../../modules/user/UserMenuButton";

export default function Home() {
	const { authState, accounts, logout, switchAccount, deleteAccount } = useAuthContext();

	if (authState.status !== "authenticated") {
		return null;
	}

	return (
		<Suspense fallback={<LoadingView />}>
			<HomeScreenContent
				session={authState.session}
				accounts={accounts}
				logout={logout}
				switchAccount={switchAccount}
				deleteAccount={deleteAccount}
			/>
		</Suspense>
	);
}

interface HomeScreenContentProps {
	session: OAuthSession;
	accounts: StoredAccount[];
	logout: () => Promise<void>;
	switchAccount: (did: AtprotoDid) => Promise<void>;
	deleteAccount: (did: AtprotoDid) => Promise<void>;
}

function HomeScreenContent({ session, accounts, logout, switchAccount, deleteAccount }: HomeScreenContentProps) {
	const { data } = useFetchLaunchers({ agent: session });

	return (
		<View style={[a.h_full]}>
			<BubbleBackground />
			<View style={[a.h_full, a.flex_col]}>
				<LauncherScreen storeViews={data.body.items} />
				<AppFooter
					onRequestOpenSettings={() => router.push("/(app)/settings")}
					onRequestOpenSocialGraph={() => router.push("/(app)/social-graph")}
				/>
			</View>

			<UserMenuButton
				did={session.did}
				accounts={accounts}
				onLogout={logout}
				onSwitchAccount={switchAccount}
				onDeleteAccount={deleteAccount}
			/>
		</View>
	);
}

function LoadingView() {
	return (
		<View style={[a.h_full, a.justify_center]}>
			<ActivityIndicator />
		</View>
	);
}
