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
  OrgTarororoBrewGetLauncher: {
    lexicon: 1,
    id: 'org.tarororo.brew.getLauncher',
    defs: {
      main: {
        type: 'query',
        description: '',
        parameters: {
          type: 'params',
          properties: {},
        },
        output: {
          schema: {
            type: 'object',
            required: ['view', 'record'],
            properties: {
              view: {
                type: 'ref',
                ref: 'lex:org.tarororo.brew.getLauncher#launcherView',
              },
              record: {
                type: 'unknown',
              },
            },
          },
          encoding: 'application/json',
        },
      },
      launcherView: {
        type: 'array',
        items: {
          type: 'ref',
          ref: 'lex:org.tarororo.brew.getLauncher#launcherViewItem',
        },
      },
      launcherViewItem: {
        type: 'object',
        required: ['thumbnail', 'record'],
        properties: {
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          author: {
            type: 'string',
          },
          launch: {
            type: 'unknown',
            description: 'TODO',
          },
          thumbnail: {
            type: 'string',
            format: 'uri',
          },
          record: {
            type: 'unknown',
          },
        },
      },
    },
  },
  OrgTarororoBrewLauncher: {
    lexicon: 1,
    id: 'org.tarororo.brew.launcher',
    defs: {
      main: {
        type: 'record',
        description: '',
        key: 'literal:self',
        record: {
          type: 'object',
          required: ['items'],
          properties: {
            items: {
              type: 'array',
              items: {
                type: 'ref',
                ref: 'lex:org.tarororo.brew.launcher#item',
              },
            },
          },
        },
      },
      item: {
        type: 'object',
        properties: {
          storeItemRef: {
            type: 'ref',
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
        description: '',
        key: 'any',
        record: {
          type: 'object',
          required: ['title', 'description', 'author', 'launch', 'thumbnail'],
          properties: {
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            author: {
              type: 'string',
            },
            launch: {
              type: 'union',
              refs: ['lex:org.tarororo.brew.storeItem#launchWeb'],
            },
            thumbnail: {
              type: 'blob',
            },
          },
        },
      },
      launchWeb: {
        type: 'object',
        required: ['link'],
        properties: {
          link: {
            type: 'string',
            format: 'uri',
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
  OrgTarororoBrewGetLauncher: 'org.tarororo.brew.getLauncher',
  OrgTarororoBrewLauncher: 'org.tarororo.brew.launcher',
  OrgTarororoBrewStoreItem: 'org.tarororo.brew.storeItem',
} as const
