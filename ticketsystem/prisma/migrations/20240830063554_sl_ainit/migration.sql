/*
  Warnings:

  - The primary key for the `acount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `acount` table. All the data in the column will be lost.
  - Added the required column `acountid` to the `acount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `acount` DROP FOREIGN KEY `users_departmentid_fkey`;

-- AlterTable
ALTER TABLE `acount` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `acountid` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`acountid`);

-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `acountid` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `SLA` (
    `SLAid` INTEGER NOT NULL AUTO_INCREMENT,
    `headline` VARCHAR(191) NOT NULL,
    `agreement` MEDIUMTEXT NOT NULL,
    `companysignature` VARCHAR(191) NOT NULL,
    `partnersignature` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`SLAid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `acount` ADD CONSTRAINT `Acount_depatmentid_fkey` FOREIGN KEY (`departmentid`) REFERENCES `department`(`departmentid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `Ticket_Acount_fkey` FOREIGN KEY (`acountid`) REFERENCES `acount`(`acountid`) ON DELETE SET NULL ON UPDATE CASCADE;
