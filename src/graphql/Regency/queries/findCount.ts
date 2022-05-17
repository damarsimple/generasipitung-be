import { queryField, nonNull, list } from 'nexus'

export const RegencyFindCountQuery = queryField('findManyRegencyCount', {
  type: nonNull('Int'),
  args: {
    where: 'RegencyWhereInput',
    orderBy: list('RegencyOrderByWithRelationInput'),
    cursor: 'RegencyWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('RegencyScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.regency.count(args as any)
  },
})
