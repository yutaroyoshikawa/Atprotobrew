/**
 * @atprotobrew/common の theme パッケージの公開 API。
 *
 * 利用側 (web/native アプリ) は基本的に以下だけを使う:
 * - <ThemeProvider>: ルートでラップ
 * - <ThemeToggle>: UI コンポーネント、トグル表示
 * - useThemeToggle(): UI 不要な場合の hook
 *
 * atoms 等の直接 export は高度な用途向け。
 */

export { ThemeProvider } from "./ThemeProvider";
export { ThemeToggle } from "./ThemeToggle";
export { useThemeToggle } from "./useThemeToggle";
export { useSystemScheme } from "./useSystemScheme";
export { useApplyPlatformTheme } from "./useApplyPlatformTheme";
export { useThemeColors } from "./useThemeColors";

export {
  themeOverrideAtom,
  systemSchemeAtom,
  resolvedThemeAtom,
} from "./atoms";

export { THEME_STORAGE_KEY } from "./types";
export type { ThemeOverride, SystemScheme, ResolvedTheme } from "./types";
export type { UseThemeToggleReturn } from "./useThemeToggle";
