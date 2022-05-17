import { queryField, nonNull } from 'nexus'

export const IdentityFileFindUniqueQuery = queryField(
  'findUniqueIdentityFile',
  {
    type: 'IdentityFile',
    args: {
      where: nonNull('IdentityFileWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.identityFile.findUnique({
        where,
        ...select,
      })
    },
  },
)
