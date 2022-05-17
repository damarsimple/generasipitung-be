import { queryField, list } from 'nexus'

export const IdentityFileFindFirstQuery = queryField('findFirstIdentityFile', {
  type: 'IdentityFile',
  args: {
    where: 'IdentityFileWhereInput',
    orderBy: list('IdentityFileOrderByWithRelationInput'),
    cursor: 'IdentityFileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('IdentityFileScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.identityFile.findFirst({
      ...args,
      ...select,
    })
  },
})
