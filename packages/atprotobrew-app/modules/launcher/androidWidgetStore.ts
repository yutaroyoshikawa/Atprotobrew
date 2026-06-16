import type { WidgetLauncherSnapshot } from "@atprotobrew/common/launcher/widgetTypes";
import { Directory, File, Paths } from "expo-file-system";

function widgetDir(): Directory {
	return new Directory(Paths.document, "widget");
}

function dataFile(): File {
	return new File(Paths.document, "widget", "widget_data.json");
}

export const AndroidWidgetStore = {
	writeSnapshot(snapshot: WidgetLauncherSnapshot): void {
		widgetDir().create({ intermediates: true, idempotent: true });
		dataFile().write(JSON.stringify(snapshot));
	},

	async loadSnapshot(): Promise<WidgetLauncherSnapshot | null> {
		const file = dataFile();

		if (!file.exists) {
			return null;
		}

		try {
			const parsed: WidgetLauncherSnapshot = await file.json();

			if (parsed.version !== 1) {
				return null;
			}

			return parsed;
		} catch {
			return null;
		}
	},
};
