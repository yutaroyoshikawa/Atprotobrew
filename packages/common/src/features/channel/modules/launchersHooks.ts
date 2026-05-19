import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchLauncher, lexicon } from "./fetchLauncher";
import type { Client } from "@atproto/lex";

export function useFetchLaunchers({ client }: { client: Client }) {
  const queryKey = [lexicon.$nsid] as const;

  const queryValues = useSuspenseQuery({
    queryKey,
    queryFn: () => fetchLauncher({ client }),
  });

  return queryValues;
}
