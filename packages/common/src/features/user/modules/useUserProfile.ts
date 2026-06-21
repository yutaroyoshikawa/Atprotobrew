import { asAtIdentifierString, xrpc } from "@atproto/lex";
import * as app from "@atprotobrew/atproto/lexicons/app";
import type { $OutputBody } from "@atprotobrew/atproto/lexicons/app/bsky/actor/getProfile";
import { useQuery } from "@tanstack/react-query";

export type UserProfile = $OutputBody;

const BSKY_PUBLIC_API = "https://public.api.bsky.app";

async function fetchUserProfile(actor: string): Promise<UserProfile> {
  const res = await xrpc(BSKY_PUBLIC_API, app.bsky.actor.getProfile.main, {
    params: { actor: asAtIdentifierString(actor) },
  });

  return res.body;
}

export function useUserProfile(actor: string) {
  return useQuery<UserProfile>({
    queryKey: ["profile", actor],
    queryFn: () => fetchUserProfile(actor),
    staleTime: 5 * 60 * 1000,
  });
}
