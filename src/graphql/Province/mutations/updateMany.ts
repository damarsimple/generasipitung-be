import { mutationField, nonNull } from 'nexus'

export const ProvinceUpdateManyMutation = mutationField('updateManyProvince', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ProvinceUpdateManyMutationInput'),
    where: 'ProvinceWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.province.updateMany(args as any)
  },
})
