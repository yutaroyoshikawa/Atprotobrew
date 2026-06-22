export type ThemeOverride = "light" | "dark" | "system";
export type SystemScheme = "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export function isTheme(value: string): value is ThemeOverride {
	const themes: string[] = ["light", "dark", "system"] as const satisfies ThemeOverride[];

	return themes.includes(value);
}

/**
 * 永続化キー。FOUC 対策スクリプト (web/index.html) と必ず一致させること。
 * キー・JSON 形式の変更時は両方を同期する。
 */
export const THEME_STORAGE_KEY = "theme-override";
