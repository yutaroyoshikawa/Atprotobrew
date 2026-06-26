import { AtPassport } from "@atpassport/client/core";
import type { AppLanguage } from "@atprotobrew/common/core/types/i18n";
import * as WebBrowser from "expo-web-browser";
import { DEFAULT_HANDLE_RESOLVER } from "./client";

// ASWebAuthenticationSession intercepts this HTTPS redirect before the OS treats
// it as a Universal Link, so no custom-scheme relay is needed.
const CALLBACK_URL = "https://brew.taroroto.org/atpassport/callback";

export async function loginWithAtPassport(
	lang: AppLanguage,
	login: (handle: string, handleResolver: string) => Promise<void>,
): Promise<void> {
	const passport = new AtPassport({ callbackUrl: CALLBACK_URL, lang });
	const { url, atpstate } = passport.generateAuthUrl();

	const result = await WebBrowser.openAuthSessionAsync(url, CALLBACK_URL);

	if (result.type !== "success") {
		return;
	}

	const passportForParse = new AtPassport({ callbackUrl: CALLBACK_URL });
	const { handle, pdsUrl } = passportForParse.parseCallback(result.url, atpstate);

	if (!handle) {
		return;
	}

	await login(handle, pdsUrl ?? DEFAULT_HANDLE_RESOLVER);
}
