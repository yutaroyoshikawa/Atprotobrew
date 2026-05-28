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
import type * as OrgTarororoBrewDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'org.tarororo.brew.storeItem'

export interface Record {
  $type: 'org.tarororo.brew.storeItem'
  /** Display title. */
  title: string
  /** Short summary for display. */
  description?: string
  /** Display name of the author. */
  author?: string
  launch:
    | $Typed<OrgTarororoBrewDefs.LaunchWeb>
    | $Typed<OrgTarororoBrewDefs.LaunchStore>
    | { $type: string }
  /** Thumbnail image. Accepts image/* up to 2000000 bytes. */
  thumbnail: BlobRef
  /** Creation timestamp. */
  createdAt: string
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}
