import type { SizeBucket } from "./widgetGrid";

export interface WidgetLauncherSnapshot {
	version: 1;
	// ISO 8601。デバッグ・将来の staleness 表示用（現状は参照のみ）
	updatedAt: string;
	// サイズごとに「行の配列」まで確定済みの描画専用データ。
	// Widget 側はこれを並べるだけ（ロジック・外部 import 不要）。
	rowsBySize: Record<SizeBucket, RenderableCell[][]>;
}

// Widget に渡る最終形（タップ先 URL・アイコン有無はアプリ側で確定済み）
export interface RenderableCell {
	label: string;
	url: string; // launchUrl ?? LAUNCHER_DEEP_LINK
	iconPath: string; // file:// パス（空ならアイコンなし）
	hasIcon: boolean;
}

// buildSnapshot 内部だけで使う中間型（snapshot には載らない）
export interface WidgetItem {
	id: string;
	label: string;
	// 共有コンテナ内の絶対ファイルパス。空文字なら欠損（プレースホルダーを表示）
	iconPath: string;
	address: number;
	// launchWeb → URL、launchStore → null
	launchUrl: string | null;
}
