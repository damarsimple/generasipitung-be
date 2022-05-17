import { mutationField, nonNull } from 'nexus'

export const RegencyDeleteManyMutation = mutationField('deleteManyRegency', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'RegencyWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.regency.deleteMany({ where } as any)
  },
})
