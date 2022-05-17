-- CreateEnum
CREATE TYPE "VerifyType" AS ENUM ('PHONE', 'MAIL', 'IDENTITY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "identityNumberVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "verifyType" "VerifyType" NOT NULL DEFAULT E'MAIL',
ADD COLUMN     "verifykey" TEXT;
