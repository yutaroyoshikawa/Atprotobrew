import { atoms as a } from "@atprotobrew/common/alf";
import { UserProfileView } from "@atprotobrew/common/user/components/UserProfileView";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { useAuthContext } from "../../../../modules/auth/AuthProvider";

export default function ProfileScreen() {
	const { did } = useLocalSearchParams<{ did: string }>();
	const { authState } = useAuthContext();

	if (authState.status !== "authenticated" || !did) {
		return null;
	}

	return (
		<View style={[a.h_full, a.w_full]}>
			<UserProfileView
				actor={did}
				agent={authState.session}
				currentUserDid={authState.session.sub}
				onNavigateToFollows={() => router.push({ pathname: "/(app)/profile/[did]/follows", params: { did } })}
				onNavigateToFollowers={() =>
					router.push({ pathname: "/(app)/profile/[did]/followers", params: { did } })
				}
			/>
		</View>
	);
}
