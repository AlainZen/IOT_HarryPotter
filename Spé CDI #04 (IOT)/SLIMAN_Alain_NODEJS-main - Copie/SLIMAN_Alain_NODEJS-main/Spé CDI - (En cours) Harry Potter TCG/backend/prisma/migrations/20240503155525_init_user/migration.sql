-- CreateTable
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `cowned` INT NULL,
    `cfav` INT NULL,

    UNIQUE INDEX `User_pseudo_key`(`pseudo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
