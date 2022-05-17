import { mutationField, nonNull } from 'nexus'

export const NotificationCreateOneMutation = mutationField(
  'createOneNotification',
  {
    type: nonNull('Notification'),
    args: {
      data: nonNull('NotificationCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.notification.create({
        data,
        ...select,
      })
    },
  },
)
