import type { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import type { ThemeOverride } from "./types";

export const storage: SyncStorage<ThemeOverride> = {
	getItem: (key, initial) => {
		const v = localStorage.getItem(key);
		return v ? (JSON.parse(v) as ThemeOverride) : initial;
	},
	setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
	removeItem: (key) => localStorage.removeItem(key),
};
