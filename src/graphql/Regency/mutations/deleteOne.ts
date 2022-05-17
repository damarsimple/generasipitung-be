import { mutationField, nonNull } from 'nexus'

export const RegencyDeleteOneMutation = mutationField('deleteOneRegency', {
  type: 'Regency',
  args: {
    where: nonNull('RegencyWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.regency.delete({
      where,
      ...select,
    })
  },
})
