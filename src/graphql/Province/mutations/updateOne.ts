import { mutationField, nonNull } from 'nexus'

export const ProvinceUpdateOneMutation = mutationField('updateOneProvince', {
  type: nonNull('Province'),
  args: {
    data: nonNull('ProvinceUpdateInput'),
    where: nonNull('ProvinceWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.province.update({
      where,
      data,
      ...select,
    })
  },
})
