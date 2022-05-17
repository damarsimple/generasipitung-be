import { queryField, nonNull } from 'nexus'

export const RegencyFindUniqueQuery = queryField('findUniqueRegency', {
  type: 'Regency',
  args: {
    where: nonNull('RegencyWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.regency.findUnique({
      where,
      ...select,
    })
  },
})
