import { queryField, list } from 'nexus'

export const RegencyFindFirstQuery = queryField('findFirstRegency', {
  type: 'Regency',
  args: {
    where: 'RegencyWhereInput',
    orderBy: list('RegencyOrderByWithRelationInput'),
    cursor: 'RegencyWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('RegencyScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.regency.findFirst({
      ...args,
      ...select,
    })
  },
})
