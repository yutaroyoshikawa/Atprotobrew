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
const id = 'org.tarororo.brew.getLauncher'

export type QueryParams = {}
export type InputSchema = undefined

export interface OutputSchema {
  items: LauncherItems
  /** Raw launcher record value. */
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
export type LauncherItems = OrgTarororoBrewDefs.StoreItemView[]
