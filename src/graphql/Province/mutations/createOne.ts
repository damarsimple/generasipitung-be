import { mutationField, nonNull } from 'nexus'

export const ProvinceCreateOneMutation = mutationField('createOneProvince', {
  type: nonNull('Province'),
  args: {
    data: nonNull('ProvinceCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.province.create({
      data,
      ...select,
    })
  },
})
