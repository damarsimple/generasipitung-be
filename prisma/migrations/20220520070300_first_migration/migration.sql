/*
  Warnings:

  - You are about to drop the `PrivateChat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PrivateChatSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PrivateChat" DROP CONSTRAINT "PrivateChat_fromId_fkey";

-- DropForeignKey
ALTER TABLE "PrivateChat" DROP CONSTRAINT "PrivateChat_toId_fkey";

-- DropForeignKey
ALTER TABLE "PrivateChatSession" DROP CONSTRAINT "PrivateChatSession_fromId_fkey";

-- DropForeignKey
ALTER TABLE "PrivateChatSession" DROP CONSTRAINT "PrivateChatSession_lastChatId_fkey";

-- DropForeignKey
ALTER TABLE "PrivateChatSession" DROP CONSTRAINT "PrivateChatSession_toId_fkey";

-- DropTable
DROP TABLE "PrivateChat";

-- DropTable
DROP TABLE "PrivateChatSession";

-- CreateTable
CREATE TABLE "ChatSession" (
    "id" TEXT NOT NULL,
    "participantsIds" TEXT[],
    "lastReadAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "fromId" TEXT NOT NULL,
    "contentType" "ContentType" NOT NULL,
    "content" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatSessionId" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chat_chatSessionId_key" ON "Chat"("chatSessionId");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_chatSessionId_fkey" FOREIGN KEY ("chatSessionId") REFERENCES "ChatSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
