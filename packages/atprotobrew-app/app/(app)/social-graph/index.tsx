import { useAuthContext } from "../../../modules/auth/AuthProvider";
import { SocialGraphListWithNav } from "../../../modules/user/SocialGraphListWithNav";

function Screen() {
  const { authState } = useAuthContext();

  if (authState.status !== "authenticated") {
    return null;
  }

  return (
    <SocialGraphListWithNav
      actor={authState.session.sub}
      agent={authState.session}
      currentUserDid={authState.session.did}
    />
  );
}

export default Screen;
