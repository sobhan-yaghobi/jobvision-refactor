-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `link` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category_collections` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER NULL,
    `name` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,

    INDEX `category_id`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `province_id` INTEGER NULL,
    `name` VARCHAR(255) NULL,

    INDEX `province_id`(`province_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provinces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `score_company` FLOAT NOT NULL,
    `score_popularity` FLOAT NOT NULL,
    `score_experience_of_job_seekers` FLOAT NOT NULL,
    `score_responsiveness` FLOAT NOT NULL,
    `website` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `company_slogan` VARCHAR(255) NOT NULL,
    `organization_employ` INTEGER NOT NULL,
    `type_of_activity` VARCHAR(255) NOT NULL,
    `industry` VARCHAR(255) NOT NULL,
    `established_year` DATETIME(0) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `company_id` INTEGER NOT NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `category_collections` ADD CONSTRAINT `category_collections_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cities` ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `provinces`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
