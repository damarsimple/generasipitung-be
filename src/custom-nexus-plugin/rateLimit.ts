import { GraphQLResolveInfo } from 'graphql'

import {
  ArgsValue,
  GetGen,
  Maybe,
  MaybePromise,
  SourceValue,
  printedGenTyping,
  printedGenTypingImport,
} from 'nexus/dist/core'
import {
  getGraphQLRateLimiter,
  GraphQLRateLimitConfig,
  GraphQLRateLimitDirectiveArgs,
} from 'graphql-rate-limit'
import { oneLine } from 'common-tags'

export type FieldRateLimitResolver<
  TypeName extends string,
  FieldName extends string,
> = (
  root: SourceValue<TypeName>,

  args: ArgsValue<TypeName, FieldName>,

  context: GetGen<'context'>,

  info: GraphQLResolveInfo,
) => MaybePromise<GraphQLRateLimitDirectiveArgs>

const fieldRateLimitResolverImport = printedGenTypingImport({
  module: '@/server/graphql/nexus/plugins/rate-limit.plugin',

  bindings: ['FieldRateLimitResolver'],
})

// This will guide Nexus on where to bind the types for your custom plugin

const fieldDefTypes = printedGenTyping({
  optional: true,

  name: 'rateLimit',

  description: oneLine`

        Rate limit plugin for an individual field. Uses the same directive args as

        \`graphql-rate-limit\`.

    `,

  type: 'FieldRateLimitResolver<TypeName, FieldName>',

  imports: [fieldRateLimitResolverImport],
})

/* ... */

import { plugin } from 'nexus'

/* ... */

export interface RateLimitPluginConfig extends GraphQLRateLimitConfig {
  defaultRateLimit?: GraphQLRateLimitDirectiveArgs
}

/* Define the actual plugin to be used with your Nexus Schema */
// https://leedavidcs.dev/posts/rate-limiting-your-graphql-nexus-resolvers
export const rateLimitPlugin = (options: RateLimitPluginConfig) => {
  const rateLimiter = getGraphQLRateLimiter(options)

  return plugin({
    name: 'CustomNexusRateLimit',

    description:
      'The rateLimit plugin provides field-level rate limiting for a schema',

    fieldDefTypes,

    onCreateFieldResolver: (config) => {
      const rateLimit = config.fieldConfig.extensions?.nexus?.config.rateLimit

      /**

             * @description If the field doesn't have a rateLimit field, and no top-level default

             *     was configured on the schema, don't worry about wrapping the resolver

             */

      if (rateLimit == null && !options.defaultRateLimit) {
        return
      }

      return async (parent, args, context, info, next) => {
        const rateLimitArgs: GraphQLRateLimitDirectiveArgs =
          rateLimit?.(parent, args, context, info) ?? options.defaultRateLimit!

        const errorMessage: Maybe<string> = await rateLimiter(
          { parent, args, context, info },

          rateLimitArgs,
        )

        if (errorMessage) {
          throw new Error(errorMessage)
        }

        return next(parent, args, context, info)
      }
    },
  })
}
