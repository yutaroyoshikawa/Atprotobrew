import type { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import { MMKV } from "react-native-mmkv";
import type { ThemeOverride } from "./types";

const mmkv = new MMKV();

export const storage: SyncStorage<ThemeOverride> = {
	getItem: (key, initial) => {
		const v = mmkv.getString(key);
		return v ? (JSON.parse(v) as ThemeOverride) : initial;
	},
	setItem: (key, value) => mmkv.set(key, JSON.stringify(value)),
	removeItem: (key) => mmkv.delete(key),
};
