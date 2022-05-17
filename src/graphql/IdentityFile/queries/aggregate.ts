import { queryField, list } from 'nexus'

export const IdentityFileAggregateQuery = queryField('aggregateIdentityFile', {
  type: 'AggregateIdentityFile',
  args: {
    where: 'IdentityFileWhereInput',
    orderBy: list('IdentityFileOrderByWithRelationInput'),
    cursor: 'IdentityFileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.identityFile.aggregate({ ...args, ...select }) as any
  },
})
