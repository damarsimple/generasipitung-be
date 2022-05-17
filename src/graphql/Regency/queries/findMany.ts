import { queryField, nonNull, list } from 'nexus'

export const RegencyFindManyQuery = queryField('findManyRegency', {
  type: nonNull(list(nonNull('Regency'))),
  args: {
    where: 'RegencyWhereInput',
    orderBy: list('RegencyOrderByWithRelationInput'),
    cursor: 'RegencyWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('RegencyScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.regency.findMany({
      ...args,
      ...select,
    })
  },
})
