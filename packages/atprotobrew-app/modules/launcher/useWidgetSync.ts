import { committedAtom } from "@atprotobrew/common/launcher/launcherStore";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { buildSnapshot } from "./buildSnapshot";
import { cacheIcons } from "./widgetIconCache";
import { widgetSync } from "./widgetSync";

export function useWidgetSync(): void {
	const committed = useAtomValue(committedAtom);

	useEffect(() => {
		syncToWidget().catch((e) => console.warn("[widget] sync failed", e));

		async function syncToWidget() {
			const iconPaths = await cacheIcons(committed);
			const snapshot = buildSnapshot(committed, iconPaths);
			await widgetSync.push(snapshot);
		}
	}, [committed]);
}
