/*
  Warnings:

  - The values [MAIL] on the enum `VerifyType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TokenClaim` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[verifykey]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `phoneNumber` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ClassroomStudentStatus" AS ENUM ('ACTIVE', 'BANNED');

-- AlterEnum
BEGIN;
CREATE TYPE "VerifyType_new" AS ENUM ('EMAIL', 'PHONE', 'OTP', 'IDENTITY');
ALTER TABLE "User" ALTER COLUMN "verifyType" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "verifyType" TYPE "VerifyType_new" USING ("verifyType"::text::"VerifyType_new");
ALTER TYPE "VerifyType" RENAME TO "VerifyType_old";
ALTER TYPE "VerifyType_new" RENAME TO "VerifyType";
DROP TYPE "VerifyType_old";
ALTER TABLE "User" ALTER COLUMN "verifyType" SET DEFAULT 'EMAIL';
COMMIT;

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropForeignKey
ALTER TABLE "TokenClaim" DROP CONSTRAINT "TokenClaim_tokenId_fkey";

-- DropForeignKey
ALTER TABLE "TokenClaim" DROP CONSTRAINT "TokenClaim_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bimbelApprovedAt" TIMESTAMP(3),
ADD COLUMN     "isBimbel" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "verifyType" DROP NOT NULL,
ALTER COLUMN "verifyType" SET DEFAULT E'EMAIL';

-- DropTable
DROP TABLE "Token";

-- DropTable
DROP TABLE "TokenClaim";

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "npsn" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "levels" INTEGER[],
    "type" TEXT NOT NULL,
    "address" TEXT,
    "logoPath" TEXT,
    "bannerPath" TEXT,
    "provinceId" TEXT NOT NULL,
    "regencyId" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "schoolId" TEXT,
    "userId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassroomStudent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "classroomId" TEXT,
    "status" "ClassroomStudentStatus" NOT NULL DEFAULT E'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassroomStudent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_verifykey_key" ON "User"("verifykey");

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_regencyId_fkey" FOREIGN KEY ("regencyId") REFERENCES "Regency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomStudent" ADD CONSTRAINT "ClassroomStudent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomStudent" ADD CONSTRAINT "ClassroomStudent_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
