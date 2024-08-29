-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `headline` VARCHAR(191) NOT NULL,
    `departmentid` INTEGER NOT NULL,
    `prioritylevelid` INTEGER NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `open` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `departmentid` INTEGER NOT NULL AUTO_INCREMENT,
    `department` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`departmentid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prioritylevel` (
    `priorityid` INTEGER NOT NULL AUTO_INCREMENT,
    `prioritysymbol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`priorityid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_departmentid_fkey` FOREIGN KEY (`departmentid`) REFERENCES `department`(`departmentid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_prioritylevelid_fkey` FOREIGN KEY (`prioritylevelid`) REFERENCES `prioritylevel`(`priorityid`) ON DELETE RESTRICT ON UPDATE CASCADE;
