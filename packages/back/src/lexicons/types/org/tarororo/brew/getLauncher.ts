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
import type * as OrgTarororoBrewStoreItem from './storeItem.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'org.tarororo.brew.getLauncher'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  view: LauncherView
  record: { [_ in string]: unknown }
}

export type HandlerInput = undefined

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess
export type LauncherView = LauncherViewItem[]

export interface LauncherViewItem {
  $type?: 'org.tarororo.brew.getLauncher#launcherViewItem'
  title: string
  description: string
  author: string
  launch:
    | $Typed<OrgTarororoBrewStoreItem.LaunchWeb>
    | $Typed<OrgTarororoBrewStoreItem.LaunchStore>
    | { $type: string }
  thumbnail: string
  uri: string
  record: { [_ in string]: unknown }
}

const hashLauncherViewItem = 'launcherViewItem'

export function isLauncherViewItem<V>(v: V) {
  return is$typed(v, id, hashLauncherViewItem)
}

export function validateLauncherViewItem<V>(v: V) {
  return validate<LauncherViewItem & V>(v, id, hashLauncherViewItem)
}
