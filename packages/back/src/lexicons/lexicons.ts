/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type LexiconDoc,
  Lexicons,
  ValidationError,
  type ValidationResult,
} from '@atproto/lexicon'
import { type $Typed, is$typed, maybe$typed } from './util.js'

export const schemaDict = {
  ComAtprotoRepoDefs: {
    defs: {
      commitMeta: {
        properties: {
          cid: {
            format: 'cid',
            type: 'string',
          },
          rev: {
            format: 'tid',
            type: 'string',
          },
        },
        required: ['cid', 'rev'],
        type: 'object',
      },
    },
    id: 'com.atproto.repo.defs',
    lexicon: 1,
  },
  ComAtprotoRepoGetRecord: {
    defs: {
      main: {
        description:
          'Get a single record from a repository. Does not require auth.',
        errors: [
          {
            name: 'RecordNotFound',
          },
        ],
        output: {
          encoding: 'application/json',
          schema: {
            properties: {
              cid: {
                format: 'cid',
                type: 'string',
              },
              uri: {
                format: 'at-uri',
                type: 'string',
              },
              value: {
                type: 'unknown',
              },
            },
            required: ['uri', 'value'],
            type: 'object',
          },
        },
        parameters: {
          properties: {
            cid: {
              description:
                'The CID of the version of the record. If not specified, then return the most recent version.',
              format: 'cid',
              type: 'string',
            },
            collection: {
              description: 'The NSID of the record collection.',
              format: 'nsid',
              type: 'string',
            },
            repo: {
              description: 'The handle or DID of the repo.',
              format: 'at-identifier',
              type: 'string',
            },
            rkey: {
              description: 'The Record Key.',
              format: 'record-key',
              type: 'string',
            },
          },
          required: ['repo', 'collection', 'rkey'],
          type: 'params',
        },
        type: 'query',
      },
    },
    id: 'com.atproto.repo.getRecord',
    lexicon: 1,
  },
  ComAtprotoRepoPutRecord: {
    defs: {
      main: {
        description:
          'Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.',
        errors: [
          {
            name: 'InvalidSwap',
          },
        ],
        input: {
          encoding: 'application/json',
          schema: {
            nullable: ['swapRecord'],
            properties: {
              collection: {
                description: 'The NSID of the record collection.',
                format: 'nsid',
                type: 'string',
              },
              record: {
                description: 'The record to write.',
                type: 'unknown',
              },
              repo: {
                description:
                  'The handle or DID of the repo (aka, current account).',
                format: 'at-identifier',
                type: 'string',
              },
              rkey: {
                description: 'The Record Key.',
                format: 'record-key',
                maxLength: 512,
                type: 'string',
              },
              swapCommit: {
                description:
                  'Compare and swap with the previous commit by CID.',
                format: 'cid',
                type: 'string',
              },
              swapRecord: {
                description:
                  'Compare and swap with the previous record by CID. WARNING: nullable and optional field; may cause problems with golang implementation',
                format: 'cid',
                type: 'string',
              },
              validate: {
                description:
                  "Can be set to 'false' to skip Lexicon schema validation of record data, 'true' to require it, or leave unset to validate only for known Lexicons.",
                type: 'boolean',
              },
            },
            required: ['repo', 'collection', 'rkey', 'record'],
            type: 'object',
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            properties: {
              cid: {
                format: 'cid',
                type: 'string',
              },
              commit: {
                ref: 'lex:com.atproto.repo.defs#commitMeta',
                type: 'ref',
              },
              uri: {
                format: 'at-uri',
                type: 'string',
              },
              validationStatus: {
                knownValues: ['valid', 'unknown'],
                type: 'string',
              },
            },
            required: ['uri', 'cid'],
            type: 'object',
          },
        },
        type: 'procedure',
      },
    },
    id: 'com.atproto.repo.putRecord',
    lexicon: 1,
  },
  ComAtprotoRepoStrongRef: {
    defs: {
      main: {
        properties: {
          cid: {
            format: 'cid',
            type: 'string',
          },
          uri: {
            format: 'at-uri',
            type: 'string',
          },
        },
        required: ['uri', 'cid'],
        type: 'object',
      },
    },
    description: 'A URI with a content-hash fingerprint.',
    id: 'com.atproto.repo.strongRef',
    lexicon: 1,
  },
  OrgTarororoBrewDefs: {
    lexicon: 1,
    id: 'org.tarororo.brew.defs',
    defs: {
      launchWeb: {
        type: 'object',
        description: 'Launch via a web URL.',
        required: ['link'],
        properties: {
          link: {
            type: 'string',
            description: 'Web URL to open.',
            format: 'uri',
          },
        },
      },
      launchStore: {
        type: 'object',
        description: 'Launch via a native app store listing.',
        required: [],
        properties: {},
      },
      storeItemView: {
        type: 'object',
        description: 'View model for a store item.',
        required: ['title', 'launch', 'thumbnail', 'uri', 'record'],
        properties: {
          title: {
            type: 'string',
            description: 'Display title.',
          },
          description: {
            type: 'string',
            description: 'Short summary for display.',
          },
          author: {
            type: 'string',
            description: 'Display name of the author.',
          },
          launch: {
            type: 'union',
            description: 'Launch target for this item.',
            refs: [
              'lex:org.tarororo.brew.defs#launchWeb',
              'lex:org.tarororo.brew.defs#launchStore',
            ],
          },
          thumbnail: {
            type: 'string',
            description: 'Public URL of a thumbnail image.',
            format: 'uri',
          },
          uri: {
            type: 'string',
            description: 'AT URI of the storeItem record.',
            format: 'at-uri',
          },
          record: {
            type: 'unknown',
            description: 'Raw storeItem record value.',
          },
        },
      },
    },
  },
  OrgTarororoBrewGetLauncher: {
    lexicon: 1,
    id: 'org.tarororo.brew.getLauncher',
    defs: {
      main: {
        type: 'query',
        description: 'Fetch the launcher view. Auth: required.',
        parameters: {
          type: 'params',
          properties: {},
        },
        output: {
          schema: {
            type: 'object',
            required: ['items', 'record'],
            properties: {
              items: {
                type: 'ref',
                description: 'List of store item views for the launcher.',
                ref: 'lex:org.tarororo.brew.getLauncher#launcherItems',
              },
              record: {
                type: 'unknown',
                description: 'Raw launcher record value.',
              },
            },
          },
          encoding: 'application/json',
        },
      },
      launcherItems: {
        type: 'array',
        description: 'Array of store item views.',
        items: {
          type: 'ref',
          ref: 'lex:org.tarororo.brew.defs#storeItemView',
        },
      },
    },
  },
  OrgTarororoBrewGetStoreItem: {
    lexicon: 1,
    id: 'org.tarororo.brew.getStoreItem',
    defs: {
      main: {
        type: 'query',
        description: 'Fetch a store item view by record URI. Auth: none.',
        parameters: {
          type: 'params',
          properties: {
            uri: {
              type: 'string',
              description: 'AT URI of the storeItem record.',
              format: 'at-uri',
            },
          },
          required: ['uri'],
        },
        output: {
          schema: {
            type: 'ref',
            ref: 'lex:org.tarororo.brew.defs#storeItemView',
          },
          encoding: 'application/json',
        },
        errors: [
          {
            name: 'NotFoundError',
          },
        ],
      },
    },
  },
  OrgTarororoBrewLauncher: {
    lexicon: 1,
    id: 'org.tarororo.brew.launcher',
    defs: {
      main: {
        type: 'record',
        description: 'Launcher record for an account.',
        key: 'literal:self',
        record: {
          type: 'object',
          required: ['items', 'createdAt'],
          properties: {
            items: {
              type: 'array',
              description: 'Ordered list of store items to show.',
              maxLength: 100,
              items: {
                type: 'ref',
                ref: 'lex:org.tarororo.brew.launcher#item',
              },
            },
            createdAt: {
              type: 'string',
              description: 'Creation timestamp.',
              format: 'datetime',
            },
          },
        },
      },
      item: {
        type: 'object',
        description: 'Entry in the launcher list.',
        properties: {
          storeItemRef: {
            type: 'ref',
            description: 'Reference to a storeItem record.',
            ref: 'lex:com.atproto.repo.strongRef',
          },
        },
      },
    },
  },
  OrgTarororoBrewStoreItem: {
    lexicon: 1,
    id: 'org.tarororo.brew.storeItem',
    defs: {
      main: {
        type: 'record',
        description: 'Store item record.',
        key: 'any',
        record: {
          type: 'object',
          required: ['title', 'launch', 'thumbnail', 'createdAt'],
          properties: {
            title: {
              type: 'string',
              description: 'Display title.',
              maxGraphemes: 50,
              maxBytes: 500,
            },
            description: {
              type: 'string',
              description: 'Short summary for display.',
              maxGraphemes: 1000,
              maxBytes: 10000,
            },
            author: {
              type: 'string',
              description: 'Display name of the author.',
              maxGraphemes: 50,
              maxBytes: 500,
            },
            launch: {
              type: 'union',
              description: 'Launch target for this item.',
              refs: [
                'lex:org.tarororo.brew.defs#launchWeb',
                'lex:org.tarororo.brew.defs#launchStore',
              ],
            },
            thumbnail: {
              type: 'blob',
              description:
                'Thumbnail image. Accepts image/* up to 2000000 bytes.',
              accept: ['image/*'],
              maxSize: 2000000,
            },
            createdAt: {
              type: 'string',
              description: 'Creation timestamp.',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
} as const satisfies Record<string, LexiconDoc>
export const schemas = Object.values(schemaDict) satisfies LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)

export function validate<T extends { $type: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType: true,
): ValidationResult<T>
export function validate<T extends { $type?: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: false,
): ValidationResult<T>
export function validate(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: boolean,
): ValidationResult {
  return (requiredType ? is$typed : maybe$typed)(v, id, hash)
    ? lexicons.validate(`${id}#${hash}`, v)
    : {
        success: false,
        error: new ValidationError(
          `Must be an object with "${hash === 'main' ? id : `${id}#${hash}`}" $type property`,
        ),
      }
}

export const ids = {
  ComAtprotoRepoDefs: 'com.atproto.repo.defs',
  ComAtprotoRepoGetRecord: 'com.atproto.repo.getRecord',
  ComAtprotoRepoPutRecord: 'com.atproto.repo.putRecord',
  ComAtprotoRepoStrongRef: 'com.atproto.repo.strongRef',
  OrgTarororoBrewDefs: 'org.tarororo.brew.defs',
  OrgTarororoBrewGetLauncher: 'org.tarororo.brew.getLauncher',
  OrgTarororoBrewGetStoreItem: 'org.tarororo.brew.getStoreItem',
  OrgTarororoBrewLauncher: 'org.tarororo.brew.launcher',
  OrgTarororoBrewStoreItem: 'org.tarororo.brew.storeItem',
} as const
