import { createTokens } from "tamagui";
import { tokens as sdTokens } from "../tokens";

export const tokens = createTokens({
  color: {
    ...Object.fromEntries(
      Object.entries(sdTokens.color.orange).map(
        ([key, value]) => [`${key}${value}` as const, value] as const,
      ),
    ),
  },
  // ... see configuration docs for required tokens
});
