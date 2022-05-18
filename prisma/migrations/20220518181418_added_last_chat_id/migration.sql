-- AlterTable
ALTER TABLE "PrivateChatSession" ADD COLUMN     "lastChatId" TEXT;

-- AddForeignKey
ALTER TABLE "PrivateChatSession" ADD CONSTRAINT "PrivateChatSession_lastChatId_fkey" FOREIGN KEY ("lastChatId") REFERENCES "PrivateChat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
