-- CreateTable
CREATE TABLE `garages` (
    `garageId` INTEGER NOT NULL AUTO_INCREMENT,
    `garageName` VARCHAR(250) NOT NULL,
    `servicesOffered` VARCHAR(250) NOT NULL,
    `Location` VARCHAR(250) NOT NULL,
    `garagePhone` VARCHAR(250) NOT NULL,
    `garageEmail` VARCHAR(250) NOT NULL,
    `timeOpen` VARCHAR(250) NOT NULL,
    `timeClose` VARCHAR(250) NOT NULL,
    `addedBy` VARCHAR(250) NOT NULL,
    `registeredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`garageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
