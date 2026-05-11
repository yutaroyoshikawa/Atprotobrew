import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import type { AppLanguage } from "../types/i18n";

export const languageAtom = atomWithStorage<AppLanguage>(
  "app-language",
  "ja",
  createJSONStorage(() => AsyncStorage),
  { getOnInit: true },
);
