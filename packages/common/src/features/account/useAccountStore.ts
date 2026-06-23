import { useCallback, useEffect, useRef, useState } from "react";
import {
  type AccountStoreApi,
  type AccountStoreState,
  accountStoreStateSchema,
  type PersistentStorage,
  type StoredAccount,
} from "./types";

export const ACCOUNT_STORE_KEY_MOBILE = "@atprotobrew/account_store";
export const ACCOUNT_STORE_KEY_WEB = "atprotobrew:account_store";

export function useAccountStore(
  storage: PersistentStorage,
  storageKey: string,
  onInit?: (existingRaw: string | null) => Promise<string | null>,
): AccountStoreApi {
  const [state, setState] = useState<AccountStoreState>({
    accounts: [],
    activeDid: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const stateRef = useRef(state);

  stateRef.current = state;

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const raw = await storage.get(storageKey);
      const resolved = onInit ? await onInit(raw) : raw;

      if (cancelled) {
        return;
      }

      if (resolved) {
        const result = accountStoreStateSchema.safeParse(JSON.parse(resolved));

        if (result.success) {
          setState(result.data);
        }
      }

      setIsLoading(false);
    };

    init().catch(() => {
      if (!cancelled) {
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [onInit, storage.get, storageKey]);

  const persistAndUpdate = useCallback(
    (
      updater: (prev: AccountStoreState) => AccountStoreState,
    ): Promise<void> => {
      const next = updater(stateRef.current);

      stateRef.current = next;
      setState(next);

      return storage.set(storageKey, JSON.stringify(next));
    },
    [storage, storageKey],
  );

  const addAccount = useCallback(
    (account: StoredAccount): Promise<void> =>
      persistAndUpdate((prev) => ({
        ...prev,
        accounts: [
          ...prev.accounts.filter((a) => a.did !== account.did),
          account,
        ],
      })),
    [persistAndUpdate],
  );

  const removeAccount = useCallback(
    (did: string): Promise<void> =>
      persistAndUpdate((prev) => ({
        accounts: prev.accounts.filter((a) => a.did !== did),
        activeDid: prev.activeDid === did ? null : prev.activeDid,
      })),
    [persistAndUpdate],
  );

  const setActiveDid = useCallback(
    (did: string | null): Promise<void> =>
      persistAndUpdate((prev) => ({
        accounts: prev.accounts.map((a) =>
          a.did === did ? { ...a, lastUsedAt: Date.now() } : a,
        ),
        activeDid: did,
      })),
    [persistAndUpdate],
  );

  const updateHandle = useCallback(
    (did: string, handle: string): Promise<void> =>
      persistAndUpdate((prev) => ({
        ...prev,
        accounts: prev.accounts.map((a) =>
          a.did === did ? { ...a, handle } : a,
        ),
      })),
    [persistAndUpdate],
  );

  return {
    accounts: state.accounts,
    activeDid: state.activeDid,
    isLoading,
    addAccount,
    removeAccount,
    setActiveDid,
    updateHandle,
  };
}
