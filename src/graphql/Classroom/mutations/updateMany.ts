import { mutationField, nonNull } from 'nexus'

export const ClassroomUpdateManyMutation = mutationField(
  'updateManyClassroom',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ClassroomUpdateManyMutationInput'),
      where: 'ClassroomWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.classroom.updateMany(args as any)
    },
  },
)
