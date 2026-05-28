/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'org.tarororo.brew.defs'

/** Launch via a web URL. */
export interface LaunchWeb {
  $type?: 'org.tarororo.brew.defs#launchWeb'
  /** Web URL to open. */
  link: string
}

const hashLaunchWeb = 'launchWeb'

export function isLaunchWeb<V>(v: V) {
  return is$typed(v, id, hashLaunchWeb)
}

export function validateLaunchWeb<V>(v: V) {
  return validate<LaunchWeb & V>(v, id, hashLaunchWeb)
}

/** Launch via a native app store listing. */
export interface LaunchStore {
  $type?: 'org.tarororo.brew.defs#launchStore'
}

const hashLaunchStore = 'launchStore'

export function isLaunchStore<V>(v: V) {
  return is$typed(v, id, hashLaunchStore)
}

export function validateLaunchStore<V>(v: V) {
  return validate<LaunchStore & V>(v, id, hashLaunchStore)
}

/** View model for a store item. */
export interface StoreItemView {
  $type?: 'org.tarororo.brew.defs#storeItemView'
  /** Display title. */
  title: string
  /** Short summary for display. */
  description?: string
  /** Display name of the author. */
  author?: string
  launch: $Typed<LaunchWeb> | $Typed<LaunchStore> | { $type: string }
  /** Public URL of a thumbnail image. */
  thumbnail: string
  /** AT URI of the storeItem record. */
  uri: string
  /** Raw storeItem record value. */
  record: { [_ in string]: unknown }
}

const hashStoreItemView = 'storeItemView'

export function isStoreItemView<V>(v: V) {
  return is$typed(v, id, hashStoreItemView)
}

export function validateStoreItemView<V>(v: V) {
  return validate<StoreItemView & V>(v, id, hashStoreItemView)
}
