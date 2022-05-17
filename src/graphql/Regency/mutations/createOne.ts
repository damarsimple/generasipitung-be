import { mutationField, nonNull } from 'nexus'

export const RegencyCreateOneMutation = mutationField('createOneRegency', {
  type: nonNull('Regency'),
  args: {
    data: nonNull('RegencyCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.regency.create({
      data,
      ...select,
    })
  },
})
