-- CreateTable
CREATE TABLE `category_collection` (
    `id` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NULL,
    `name` TEXT NULL,
    `link` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `link` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `province` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `city` (
    `id` VARCHAR(191) NOT NULL,
    `province_id` VARCHAR(191) NULL,
    `name` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `company_id` VARCHAR(191) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `followers` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `id` VARCHAR(191) NOT NULL,
    `city_id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(255) NOT NULL,
    `logo` TEXT NOT NULL,
    `score_company` FLOAT NOT NULL,
    `score_popularity` FLOAT NOT NULL,
    `score_experience_of_job_seekers` FLOAT NOT NULL,
    `score_responsiveness` FLOAT NOT NULL,
    `website` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `slogan` TEXT NOT NULL,
    `organization_employ` INTEGER NOT NULL,
    `type_of_activity` TEXT NOT NULL,
    `industry` TEXT NOT NULL,
    `established_year` DATETIME NOT NULL,
    `location_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `company_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userCompanyFollow` (
    `user_id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,
    `followersId` VARCHAR(191) NULL,

    UNIQUE INDEX `userCompanyFollow_user_id_company_id_key`(`user_id`, `company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `advantage` (
    `id` VARCHAR(191) NOT NULL,
    `type` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ad` (
    `company_id` VARCHAR(191) NOT NULL,
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `price` JSON NOT NULL,
    `work_time` TEXT NOT NULL,
    `travel_benefits` TEXT NOT NULL,
    `age` JSON NOT NULL,
    `edicational_level` JSON NOT NULL,
    `key_indicator` JSON NOT NULL,
    `software_skills` JSON NOT NULL,
    `tags` JSON NOT NULL,
    `facilities` JSON NOT NULL,
    `gender` ENUM('FEMALE', 'MALE', 'NOT_IMPORTANT') NOT NULL,
    `seniority_level` ENUM('WORKER', 'EMPLOYEE', 'EXPERT', 'MA', 'ASSISTANCE', 'CHIEF') NOT NULL,
    `cooperation_type` ENUM('FULL_TIME', 'PART_TIME', 'CONTRACT') NOT NULL,
    `important` BOOLEAN NOT NULL DEFAULT false,
    `response` BOOLEAN NOT NULL DEFAULT false,
    `itern` BOOLEAN NOT NULL DEFAULT false,
    `telecommuting` BOOLEAN NOT NULL DEFAULT false,
    `disabledPeople` BOOLEAN NOT NULL DEFAULT false,
    `militaryOrder` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adsCategory_collection` (
    `ad_id` VARCHAR(191) NOT NULL,
    `category_collection_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ad_id`, `category_collection_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facilitiesAdvantage` (
    `ad_id` VARCHAR(191) NOT NULL,
    `advantage_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ad_id`, `advantage_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cv` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ad_id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,
    `status` ENUM('accept', 'reject', 'waiting') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cvAd` (
    `cv_id` VARCHAR(191) NOT NULL,
    `ad_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cv_id`, `ad_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `category_collection` ADD CONSTRAINT `category_collection_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `city_province_id_fkey` FOREIGN KEY (`province_id`) REFERENCES `province`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `followers` ADD CONSTRAINT `followers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `followers` ADD CONSTRAINT `followers_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `location` ADD CONSTRAINT `location_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `city`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `company` ADD CONSTRAINT `company_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userCompanyFollow` ADD CONSTRAINT `userCompanyFollow_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userCompanyFollow` ADD CONSTRAINT `userCompanyFollow_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userCompanyFollow` ADD CONSTRAINT `userCompanyFollow_followersId_fkey` FOREIGN KEY (`followersId`) REFERENCES `followers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ad` ADD CONSTRAINT `ad_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adsCategory_collection` ADD CONSTRAINT `adsCategory_collection_ad_id_fkey` FOREIGN KEY (`ad_id`) REFERENCES `ad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adsCategory_collection` ADD CONSTRAINT `adsCategory_collection_category_collection_id_fkey` FOREIGN KEY (`category_collection_id`) REFERENCES `category_collection`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facilitiesAdvantage` ADD CONSTRAINT `facilitiesAdvantage_ad_id_fkey` FOREIGN KEY (`ad_id`) REFERENCES `ad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facilitiesAdvantage` ADD CONSTRAINT `facilitiesAdvantage_advantage_id_fkey` FOREIGN KEY (`advantage_id`) REFERENCES `advantage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cv` ADD CONSTRAINT `cv_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cv` ADD CONSTRAINT `cv_ad_id_fkey` FOREIGN KEY (`ad_id`) REFERENCES `ad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cv` ADD CONSTRAINT `cv_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cvAd` ADD CONSTRAINT `cvAd_cv_id_fkey` FOREIGN KEY (`cv_id`) REFERENCES `cv`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cvAd` ADD CONSTRAINT `cvAd_ad_id_fkey` FOREIGN KEY (`ad_id`) REFERENCES `ad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
