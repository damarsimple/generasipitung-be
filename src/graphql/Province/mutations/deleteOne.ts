import { mutationField, nonNull } from 'nexus'

export const ProvinceDeleteOneMutation = mutationField('deleteOneProvince', {
  type: 'Province',
  args: {
    where: nonNull('ProvinceWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.province.delete({
      where,
      ...select,
    })
  },
})
