/*
  Warnings:

  - You are about to drop the column `requestedById` on the `BypassRequest` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `LaundryItem` table. All the data in the column will be lost.
  - You are about to drop the column `isRead` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `deliveredAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalItem` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the column `outletId` on the `StationProcessing` table. All the data in the column will be lost.
  - You are about to drop the column `pendingEmail` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Shift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShiftAssignment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BypassRequest" DROP CONSTRAINT "BypassRequest_requestedById_fkey";

-- DropForeignKey
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_outletId_fkey";

-- DropForeignKey
ALTER TABLE "ShiftAssignment" DROP CONSTRAINT "ShiftAssignment_employeeAssignmentId_fkey";

-- DropForeignKey
ALTER TABLE "ShiftAssignment" DROP CONSTRAINT "ShiftAssignment_shiftId_fkey";

-- DropForeignKey
ALTER TABLE "StationProcessing" DROP CONSTRAINT "StationProcessing_outletId_fkey";

-- DropIndex
DROP INDEX "Notification_userId_isRead_idx";

-- DropIndex
DROP INDEX "StationProcessing_outletId_station_idx";

-- AlterTable
ALTER TABLE "BypassRequest" DROP COLUMN "requestedById";

-- AlterTable
ALTER TABLE "LaundryItem" DROP COLUMN "isActive",
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "isRead",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deliveredAt",
DROP COLUMN "totalItem";

-- AlterTable
ALTER TABLE "Outlet" DROP COLUMN "isActive";

-- AlterTable
ALTER TABLE "StationProcessing" DROP COLUMN "outletId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "pendingEmail";

-- DropTable
DROP TABLE "Shift";

-- DropTable
DROP TABLE "ShiftAssignment";

-- CreateIndex
CREATE INDEX "Notification_userId_readAt_idx" ON "Notification"("userId", "readAt");
