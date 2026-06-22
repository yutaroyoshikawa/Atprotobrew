import type { Client } from "@atproto/lex";
import { UserProfileView } from "@atprotobrew/common/user/components/UserProfileView";
import { Trans } from "@lingui/react/macro";
import { useNavigate, useParams } from "react-router-dom";
import { ProfilePageLayout } from "./ProfilePageLayout";

interface UserProfileProps {
	client: Client | undefined;
	currentUserDid: string | undefined;
}

export function UserProfile({ client, currentUserDid }: UserProfileProps) {
	const { did } = useParams<{ did: string }>();
	const navigate = useNavigate();

	if (!did) {
		return null;
	}

	const encodedDid = encodeURIComponent(did);

	return (
		<ProfilePageLayout backTo="/" title={<Trans>プロフィール</Trans>}>
			<UserProfileView
				actor={did}
				agent={client}
				currentUserDid={currentUserDid}
				onNavigateToFollows={() => navigate(`/profile/${encodedDid}/follows`)}
				onNavigateToFollowers={() => navigate(`/profile/${encodedDid}/followers`)}
			/>
		</ProfilePageLayout>
	);
}
