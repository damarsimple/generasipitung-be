import { mutationField, nonNull } from 'nexus'

export const IdentityFileUpsertOneMutation = mutationField(
  'upsertOneIdentityFile',
  {
    type: nonNull('IdentityFile'),
    args: {
      where: nonNull('IdentityFileWhereUniqueInput'),
      create: nonNull('IdentityFileCreateInput'),
      update: nonNull('IdentityFileUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.identityFile.upsert({
        ...args,
        ...select,
      })
    },
  },
)
