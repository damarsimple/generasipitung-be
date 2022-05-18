import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { graphqlUploadExpress } from 'graphql-upload'
import { ExtendedUser } from './modules/user'
import { schema } from './src/nexusSchema'
import { prisma } from './modules/prisma'
import { createServer } from 'http'

import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'

import { WebSocketServer } from 'ws'

import { useServer } from 'graphql-ws/lib/use/ws'
import { createContext } from './src/context'

async function startApolloServer() {
  const app = express()

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))

  app.use(express.static('public'))

  const httpServer = createServer(app)

  const wsServer = new WebSocketServer({
    // This is the `httpServer` we created in a previous step.

    server: httpServer,

    // Pass a different path here if your ApolloServer serves at

    // a different path.

    path: '/graphql',
  })

  // Hand in the schema we just created and have the

  // WebSocketServer start listening.

  const serverCleanup = useServer(
    {
      schema,
      context: async (e) => {
        return {
          ...e,
          ...(await createContext({
            req: {
              headers: {
                //@ts-ignore
                authorization: e.connectionParams?.headers?.authorization,
              },
            },
          } as any)),
        }
      },
    },
    wsServer,
  )

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    context: createContext,

    plugins: [
      // Proper shutdown for the HTTP server.

      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.

      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            },
          }
        },
      },
    ],
  })

  await server.start()

  server.applyMiddleware({
    app,
    bodyParserConfig: {
      limit: '100mb',
    },
  })

  // Now that our HTTP server is fully set up, we can listen to it.

  httpServer.listen(4000, () => {
    console.log(
      `🚀 Server is now running on http://localhost:${4000}${
        server.graphqlPath
      }`,
    )
  })
}

startApolloServer()
