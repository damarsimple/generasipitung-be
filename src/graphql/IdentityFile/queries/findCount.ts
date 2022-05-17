import { queryField, nonNull, list } from 'nexus'

export const IdentityFileFindCountQuery = queryField(
  'findManyIdentityFileCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'IdentityFileWhereInput',
      orderBy: list('IdentityFileOrderByWithRelationInput'),
      cursor: 'IdentityFileWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('IdentityFileScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.identityFile.count(args as any)
    },
  },
)
