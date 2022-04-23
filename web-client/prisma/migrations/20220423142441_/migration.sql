-- CreateTable
CREATE TABLE `users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `registeredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(250) NOT NULL,
    `userType` VARCHAR(250) NOT NULL,
    `isActive` CHAR(1) NOT NULL DEFAULT '1',

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
