import { mutationField, nonNull } from 'nexus'

export const SchoolDeleteManyMutation = mutationField('deleteManySchool', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SchoolWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.school.deleteMany({ where } as any)
  },
})
