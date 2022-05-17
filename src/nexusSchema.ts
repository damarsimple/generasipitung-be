import { fieldAuthorizePlugin, makeSchema } from 'nexus'
import * as types from './graphql'
import * as customTypes from './custom-graphql'
import * as scalarTypes from './scalar-graphql'
import { paljs } from '@paljs/nexus'
import { join } from 'path'
import { Maybe } from 'nexus/dist/core'
import { RedisStore } from 'graphql-rate-limit'
import { redis } from '../modules/pubsub'
import { rateLimitPlugin } from './custom-nexus-plugin/rateLimit'
import { Context } from './context'

export const schema = makeSchema({
  types: {
    ...scalarTypes,
    ...types,
    ...customTypes,
  },
  plugins: [
    paljs({ excludeFields: ['password'] }),
    fieldAuthorizePlugin(),
    rateLimitPlugin({
      identifyContext: ({ ip, user }: Context): string => {
        const identityKey: string = ip ?? user.id ?? ''

        return identityKey
      },

      store: new RedisStore(redis),
    }),
  ],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: join(__dirname, 'context.ts'),
    export: 'Context',
  },
})
