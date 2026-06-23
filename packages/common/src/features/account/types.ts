import { z } from "zod";

export const storedAccountSchema = z.object({
	did: z.string(),
	handle: z.string(),
	handleResolver: z.string(),
	addedAt: z.number(),
	lastUsedAt: z.number(),
});

export const accountStoreStateSchema = z.object({
	accounts: z.array(storedAccountSchema),
	activeDid: z.string().nullable(),
});

export type StoredAccount = z.infer<typeof storedAccountSchema>;
export type AccountStoreState = z.infer<typeof accountStoreStateSchema>;

export interface PersistentStorage {
	get(key: string): Promise<string | null>;
	set(key: string, value: string): Promise<void>;
	remove(key: string): Promise<void>;
}

export interface AccountStoreApi {
	accounts: StoredAccount[];
	activeDid: string | null;
	isLoading: boolean;
	addAccount(account: StoredAccount): Promise<void>;
	removeAccount(did: string): Promise<void>;
	setActiveDid(did: string | null): Promise<void>;
	updateHandle(did: string, handle: string): Promise<void>;
}
