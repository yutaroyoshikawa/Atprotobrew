import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const storeItemsTable = sqliteTable("store_items", {
	id: integer().primaryKey({ autoIncrement: true }),
	// AT URI
	uri: text().notNull().unique(),
	title: text().notNull(),
	description: text(),
	author: text(),
	createdAt: integer().notNull(),
	updatedAt: integer().notNull(),
	indexedAt: integer().notNull(),
	// JSONそのまま
	launch: text().notNull(),
	thumbnailCid: text().notNull(),
	thumbnailUrl: text().notNull(),
	originalRecord: text().notNull(),
});

export const launcherTable = sqliteTable("launcher", {
	id: integer().primaryKey({ autoIncrement: true }),
	did: text().notNull().unique(),
	// JSON Array
	uris: text().notNull(),
});
