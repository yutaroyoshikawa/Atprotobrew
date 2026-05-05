import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchLauncher, lexicon } from "./fetchLauncher";
import type { AtIdentifierString, Client } from "@atproto/lex";

export function useFetchLaunchers({
  client,
  identifier,
}: {
  client: Client;
  identifier: AtIdentifierString;
}) {
  const queryKey = [lexicon.$lxm, identifier] as const;

  const queryValues = useSuspenseQuery({
    queryKey,
    queryFn: () => fetchLauncher({ identifier, client }),
  });

  return queryValues;
}
