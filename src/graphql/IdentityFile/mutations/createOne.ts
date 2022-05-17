import { mutationField, nonNull } from 'nexus'

export const IdentityFileCreateOneMutation = mutationField(
  'createOneIdentityFile',
  {
    type: nonNull('IdentityFile'),
    args: {
      data: nonNull('IdentityFileCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.identityFile.create({
        data,
        ...select,
      })
    },
  },
)
