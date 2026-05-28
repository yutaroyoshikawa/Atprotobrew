import type { AnyD1Database, DrizzleD1Database } from "drizzle-orm/d1";

export type Env = {
	Bindings: CloudflareBindings;
	Variables: {
		db: DrizzleD1Database<Record<string, never>> & {
			$client: AnyD1Database;
		};
	};
};
