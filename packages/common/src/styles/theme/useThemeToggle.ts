import { useAtom, useAtomValue } from "jotai";
import { themeOverrideAtom, resolvedThemeAtom } from "./atoms";
import type { ThemeOverride, ResolvedTheme } from "./types";

export interface UseThemeToggleReturn {
  /** ユーザーが選択した override 値 ('light'|'dark'|'system') */
  override: ThemeOverride;
  /** resolved 値を更新する関数。永続化も自動 */
  setOverride: (next: ThemeOverride) => void;
  /** 実際に適用中の theme ('light'|'dark') */
  resolved: ResolvedTheme;
}

/**
 * トグル UI 用 hook。
 * override を読み書きでき、setOverride() で永続化も自動。
 * resolved は read-only で、実適用値を参照可能。
 */
export function useThemeToggle(): UseThemeToggleReturn {
  const [override, setOverride] = useAtom(themeOverrideAtom);
  const resolved = useAtomValue(resolvedThemeAtom);

  return { override, setOverride, resolved };
}
