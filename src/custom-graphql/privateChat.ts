import { PrivateChat } from "@prisma/client";
import { arg, extendType, nonNull, stringArg, subscriptionType } from "nexus"
import { storeFile } from '../../modules/filesystem';
import { pubsub, publish } from '../../modules/pubsub';

export const PrivateChatMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nullable.field('sendChat', {
            type: 'PrivateChat',
            authorize: (_, __, { can }) => can('SEND_CHAT'),
            args: {

                to: nonNull(stringArg()),
                content: nonNull(stringArg()),
                type: nonNull(arg({ type: 'ContentType' })),
                file: arg({ type: 'Upload' }),
            },
            resolve: async (_, {

                file, to, content, type

            }, { user, prisma }) => {

                let contentU;

                if (file) {

                    contentU = await storeFile(file);
                }




                const pc = await prisma.privateChat.create({
                    data: {
                        toId: to,
                        fromId: user.id,
                        content: contentU ?? content,
                        contentType: type
                    }
                })

                publish('PRIVATE_CHAT_CREATED_' + pc.toId, await prisma.privateChat.findUnique({ where: { id: pc.id }, include: { from: true, to: true } }));


                return pc

            }
        })

    }
})


export const subscriptions = subscriptionType({

    definition(t) {

        t.field('privateChatSubscribe', {

            type: 'PrivateChat',
            authorize: (_, __, { can }) => can('LISTEN_CHAT'),
            async subscribe(_, __, { user }) {

                return pubsub.asyncIterator<PrivateChat>(['PRIVATE_CHAT_CREATED_' + user.id]);
            },

            resolve(eventData) {

                return eventData

            },


        })

    },

})