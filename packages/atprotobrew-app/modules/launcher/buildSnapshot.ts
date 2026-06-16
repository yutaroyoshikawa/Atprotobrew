import type { LauncherItem } from "@atprotobrew/common/launcher/types";
import { LAUNCHER_DEEP_LINK } from "@atprotobrew/common/launcher/widgetConstants";
import {
	chunk,
	isMissingIcon,
	type SizeBucket,
	selectItems,
	WIDGET_GRID,
} from "@atprotobrew/common/launcher/widgetGrid";
import type { RenderableCell, WidgetItem, WidgetLauncherSnapshot } from "@atprotobrew/common/launcher/widgetTypes";

const SIZE_BUCKETS: SizeBucket[] = ["small", "medium", "large"];

// 副作用ゼロの純関数。IO（cacheIcons）と分離してあるため単体テスト可能
export function buildSnapshot(items: LauncherItem[], iconPaths: Map<string, string>): WidgetLauncherSnapshot {
	const widgetItems: WidgetItem[] = items
		.map((it) => ({
			id: it.id,
			label: it.label,
			iconPath: iconPaths.get(it.id) ?? "",
			address: it.address,
			launchUrl: it.launch.$type === "org.tarororo.brew.defs#launchWeb" ? it.launch.link : null,
		}))
		.sort((a, b) => a.address - b.address);

	const rowsBySize = Object.fromEntries(
		SIZE_BUCKETS.map((bucket) => {
			const { columns } = WIDGET_GRID[bucket];
			const cells: RenderableCell[] = selectItems(widgetItems, bucket).map((it) => ({
				label: it.label,
				url: it.launchUrl ?? LAUNCHER_DEEP_LINK,
				iconPath: it.iconPath,
				hasIcon: !isMissingIcon(it),
			}));
			return [bucket, chunk(cells, columns)];
		}),
	) as Record<SizeBucket, RenderableCell[][]>;

	return { version: 1, updatedAt: new Date().toISOString(), rowsBySize };
}
