/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `acount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acount_name` VARCHAR(191) NOT NULL,
    `departmentid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `acount` ADD CONSTRAINT `users_departmentid_fkey` FOREIGN KEY (`departmentid`) REFERENCES `department`(`departmentid`) ON DELETE RESTRICT ON UPDATE CASCADE;
