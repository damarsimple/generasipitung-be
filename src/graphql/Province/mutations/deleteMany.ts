import { mutationField, nonNull } from 'nexus'

export const ProvinceDeleteManyMutation = mutationField('deleteManyProvince', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProvinceWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.province.deleteMany({ where } as any)
  },
})
