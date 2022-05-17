import { mutationField, nonNull } from 'nexus'

export const SchoolUpdateManyMutation = mutationField('updateManySchool', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('SchoolUpdateManyMutationInput'),
    where: 'SchoolWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.school.updateMany(args as any)
  },
})
