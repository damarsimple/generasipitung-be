import { queryField, nonNull, list } from 'nexus'

export const IdentityFileFindManyQuery = queryField('findManyIdentityFile', {
  type: nonNull(list(nonNull('IdentityFile'))),
  args: {
    where: 'IdentityFileWhereInput',
    orderBy: list('IdentityFileOrderByWithRelationInput'),
    cursor: 'IdentityFileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('IdentityFileScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.identityFile.findMany({
      ...args,
      ...select,
    })
  },
})
