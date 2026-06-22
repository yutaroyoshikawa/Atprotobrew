import { useEffect, useRef } from "react";
import { parseAtPassportCallback } from "../../hooks/useAtPassport";

interface Props {
	login: (handle: string, handleResolver: string) => Promise<void>;
}

// Chrome Custom Tabs on Android blocks custom scheme redirects via window.location.
// intent:// URI is required to properly trigger the Android intent filter.
function buildAppRedirectUrl(params: URLSearchParams): string {
	const qs = params.toString();
	if (/android/i.test(navigator.userAgent)) {
		return `intent://atpassport/callback?${qs}#Intent;scheme=org.tarororo.brew;package=org.tarororo.brew;end;`;
	}
	return `org.tarororo.brew://atpassport/callback?${qs}`;
}

export function AtPassportCallback({ login }: Props) {
	const ran = useRef(false);

	useEffect(() => {
		if (ran.current) {
			return;
		}
		ran.current = true;

		const params = new URLSearchParams(window.location.search);

		if (params.get("source") === "app") {
			window.location.replace(buildAppRedirectUrl(params));
			return;
		}

		parseAtPassportCallback(login);
	}, [login]);

	return (
		<div className="min-h-screen bg-bg flex items-center justify-center">
			<div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
		</div>
	);
}
