/*
  Warnings:

  - You are about to drop the column `cityId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `regencyId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_provinceId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_cityId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cityId",
ADD COLUMN     "regencyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "City";

-- CreateTable
CREATE TABLE "Regency" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,

    CONSTRAINT "Regency_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Regency" ADD CONSTRAINT "Regency_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regencyId_fkey" FOREIGN KEY ("regencyId") REFERENCES "Regency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
