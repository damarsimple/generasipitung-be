import { mutationField, nonNull } from 'nexus'

export const RegencyUpdateOneMutation = mutationField('updateOneRegency', {
  type: nonNull('Regency'),
  args: {
    data: nonNull('RegencyUpdateInput'),
    where: nonNull('RegencyWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.regency.update({
      where,
      data,
      ...select,
    })
  },
})
