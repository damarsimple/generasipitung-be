import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('email')
    t.string('password')
    t.string('phoneNumber')
    t.nullable.string('address')
    t.nullable.string('profilePicturePath')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('nisn')
    t.nullable.string('nrg')
    t.nullable.string('verifykey')
    t.nullable.field('verifyType', { type: 'VerifyType' })
    t.string('provinceId')
    t.field('province', {
      type: 'Province',
      resolve(root: any) {
        return root.province
      },
    })
    t.string('regencyId')
    t.field('regency', {
      type: 'Regency',
      resolve(root: any) {
        return root.regency
      },
    })
    t.boolean('isAdmin')
    t.boolean('isBimbel')
    t.field('role', { type: 'Roles' })
    t.float('balance')
    t.nullable.field('emailVerifiedAt', { type: 'DateTime' })
    t.nullable.field('phoneNumberVerifiedAt', { type: 'DateTime' })
    t.nullable.field('bimbelApprovedAt', { type: 'DateTime' })
    t.nullable.field('identityNumberVerifiedAt', { type: 'DateTime' })
    t.list.field('identityFiles', {
      type: 'IdentityFile',
      args: {
        where: 'IdentityFileWhereInput',
        orderBy: 'IdentityFileOrderByWithRelationInput',
        cursor: 'IdentityFileWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'IdentityFileScalarFieldEnum',
      },
      resolve(root: any) {
        return root.identityFiles
      },
    })
    t.list.field('questions', {
      type: 'Question',
      args: {
        where: 'QuestionWhereInput',
        orderBy: 'QuestionOrderByWithRelationInput',
        cursor: 'QuestionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'QuestionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.questions
      },
    })
    t.list.field('examinations', {
      type: 'Exam',
      args: {
        where: 'ExamWhereInput',
        orderBy: 'ExamOrderByWithRelationInput',
        cursor: 'ExamWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExamScalarFieldEnum',
      },
      resolve(root: any) {
        return root.examinations
      },
    })
    t.list.field('examsessions', {
      type: 'ExamSession',
      args: {
        where: 'ExamSessionWhereInput',
        orderBy: 'ExamSessionOrderByWithRelationInput',
        cursor: 'ExamSessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExamSessionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.examsessions
      },
    })
    t.list.field('myChats', {
      type: 'Chat',
      args: {
        where: 'ChatWhereInput',
        orderBy: 'ChatOrderByWithRelationInput',
        cursor: 'ChatWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ChatScalarFieldEnum',
      },
      resolve(root: any) {
        return root.myChats
      },
    })
    t.list.field('classrooms', {
      type: 'Classroom',
      args: {
        where: 'ClassroomWhereInput',
        orderBy: 'ClassroomOrderByWithRelationInput',
        cursor: 'ClassroomWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ClassroomScalarFieldEnum',
      },
      resolve(root: any) {
        return root.classrooms
      },
    })
    t.list.field('classroomStudents', {
      type: 'ClassroomStudent',
      args: {
        where: 'ClassroomStudentWhereInput',
        orderBy: 'ClassroomStudentOrderByWithRelationInput',
        cursor: 'ClassroomStudentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ClassroomStudentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.classroomStudents
      },
    })
    t.list.field('notifications', {
      type: 'Notification',
      args: {
        where: 'NotificationWhereInput',
        orderBy: 'NotificationOrderByWithRelationInput',
        cursor: 'NotificationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'NotificationScalarFieldEnum',
      },
      resolve(root: any) {
        return root.notifications
      },
    })
    t.list.field('schoolStaffs', {
      type: 'SchoolStaff',
      args: {
        where: 'SchoolStaffWhereInput',
        orderBy: 'SchoolStaffOrderByWithRelationInput',
        cursor: 'SchoolStaffWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SchoolStaffScalarFieldEnum',
      },
      resolve(root: any) {
        return root.schoolStaffs
      },
    })
    t.nullable.string('schoolId')
    t.nullable.field('school', {
      type: 'School',
      resolve(root: any) {
        return root.school
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
