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
const id = 'org.tarororo.brew.getStoreItem'

export type QueryParams = {
  /** AT URI of the storeItem record. */
  uri: string
}
export type InputSchema = undefined
export type OutputSchema = OrgTarororoBrewDefs.StoreItemView
export type HandlerInput = undefined

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'NotFoundError'
}

export type HandlerOutput = HandlerError | HandlerSuccess
