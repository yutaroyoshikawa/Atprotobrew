import * as z from "zod";

export const AppLanguageSchema = z.union([z.literal("ja"), z.literal("en")]);
