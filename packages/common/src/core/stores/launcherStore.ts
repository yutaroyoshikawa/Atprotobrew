import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { MMKV } from 'react-native-mmkv';
import type { SyncStorage } from 'jotai/vanilla/utils/atomWithStorage';
import {
  buildCommitted,
  moveItem,
  toPersisted,
  reflowIfNeeded,
} from '../../features/launcher/launcherLayout';
import type { LauncherItem, PersistedLayoutV1, StoreItemView } from '../../features/launcher/types';

const mmkv = new MMKV({ id: 'launcher' });

const persistedStorage: SyncStorage<PersistedLayoutV1 | null> = {
  getItem: (key, initialValue) => {
    const v = mmkv.getString(key);
    return v ? (JSON.parse(v) as PersistedLayoutV1) : initialValue;
  },
  setItem: (key, value) => {
    mmkv.set(key, JSON.stringify(value));
  },
  removeItem: (key) => {
    mmkv.delete(key);
  },
};

/** 保存される唯一の出力。番地マップのみ。 */
export const persistedLayoutAtom = atomWithStorage<PersistedLayoutV1 | null>(
  'launcher.layout',
  null,
  persistedStorage,
  { getOnInit: true },
);

/** getLauncher の結果（LauncherScreen が set する）。 */
export const storeViewsAtom = atom<StoreItemView[]>([]);

/** 現在の gridConfig.perPage（リフロー判定用）。 */
export const perPageAtom = atom<number>(0);

/** committed = views + persistedLayout から派生（読み取り専用）。 */
export const committedAtom = atom<LauncherItem[]>((get) => {
  const views = get(storeViewsAtom);
  const persisted = reflowIfNeeded(get(persistedLayoutAtom), get(perPageAtom));
  return buildCommitted(views, persisted);
});

/** EDIT 中のみ非 null（null = VIEW モード）。 */
export const draftAtom = atom<LauncherItem[] | null>(null);

/** モードは draft の null 判定から派生。 */
export const modeAtom = atom<'VIEW' | 'EDIT'>((get) =>
  get(draftAtom) === null ? 'VIEW' : 'EDIT',
);

// ---- actions ----

export const enterEditAtom = atom(null, (get, set) => {
  set(draftAtom, [...get(committedAtom)]);
});

export const cancelEditAtom = atom(null, (_get, set) => {
  set(draftAtom, null);
});

export const saveEditAtom = atom(null, (get, set) => {
  const draft = get(draftAtom);
  if (!draft) return;
  const perPage = get(perPageAtom);
  set(persistedLayoutAtom, toPersisted(draft, perPage));
  set(draftAtom, null);
});

export const moveItemAtom = atom(
  null,
  (get, set, { id, targetAddress }: { id: string; targetAddress: number }) => {
    const draft = get(draftAtom);
    if (!draft) return;
    set(draftAtom, moveItem(draft, id, targetAddress));
  },
);
