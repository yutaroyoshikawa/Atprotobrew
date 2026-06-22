import { AtPassport } from "@atpassport/client/core";
import type { AppLanguage } from "@atprotobrew/common/core/types/i18n";
import * as WebBrowser from "expo-web-browser";
import { DEFAULT_HANDLE_RESOLVER } from "./client";

// AtPassport requires HTTPS; the web app relays back via the custom scheme.
const WEB_CALLBACK_URL = "https://brew.tarororo.org/atpassport/callback";
const APP_CALLBACK_URL = "org.tarororo.brew://atpassport/callback";

export async function loginWithAtPassport(
	lang: AppLanguage,
	login: (handle: string, handleResolver: string) => Promise<void>,
): Promise<void> {
	const passport = new AtPassport({ callbackUrl: WEB_CALLBACK_URL, lang });
	const { url, atpstate } = passport.generateAuthUrl({ source: "app" });

	const result = await WebBrowser.openAuthSessionAsync(url, APP_CALLBACK_URL);

	if (result.type !== "success") {
		return;
	}

	// The web relay rewrites the callback to the custom scheme while preserving
	// all query params, so we parse against the app scheme URL.
	const passportForParse = new AtPassport({ callbackUrl: APP_CALLBACK_URL });
	const { handle, pdsUrl } = passportForParse.parseCallback(result.url, atpstate);

	if (!handle) {
		return;
	}

	await login(handle, pdsUrl ?? DEFAULT_HANDLE_RESOLVER);
}
