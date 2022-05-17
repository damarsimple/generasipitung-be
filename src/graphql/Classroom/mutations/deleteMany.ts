import { mutationField, nonNull } from 'nexus'

export const ClassroomDeleteManyMutation = mutationField(
  'deleteManyClassroom',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ClassroomWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.classroom.deleteMany({ where } as any)
    },
  },
)
