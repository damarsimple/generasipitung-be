import { PubSub } from 'graphql-subscriptions'
import Redis from 'ioredis'

export const pubsub = new PubSub()

export const redis = new Redis()
// export const publish = new Redis()
// export const subscribe = new Redis()

export async function publish<T>(channel: string, data: T) {
  await pubsub.publish(channel, data)
}
