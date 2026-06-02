import { StoreItemView } from "@atprotobrew/atproto/lexicons/org/tarororo/brew/defs.defs";

export type LaunchTarget =
  | { $type: "org.tarororo.brew.defs#launchWeb"; link: string }
  | { $type: "org.tarororo.brew.defs#launchStore" };

export interface LauncherItem {
  id: string; // AT URI (storeItemView.uri)
  label: string; // storeItemView.title
  iconUri: string; // storeItemView.thumbnail
  address: number; // 絶対番地
  launch: LaunchTarget;
}

export type StoreItem = StoreItemView;

export interface PersistedLayoutV1 {
  version: 1;
  perPage: number;
  items: { id: string; address: number }[];
}
