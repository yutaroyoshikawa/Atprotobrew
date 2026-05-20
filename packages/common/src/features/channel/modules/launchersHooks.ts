import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchLauncher, lexicon } from "./fetchLauncher";
import type { Agent } from "@atproto/lex";

export function useFetchLaunchers({ agent }: { agent: Agent }) {
  const queryKey = [lexicon.$nsid] as const;

  const queryValues = useSuspenseQuery({
    queryKey,
    queryFn: () => fetchLauncher({ agent }),
  });

  return queryValues;
}
