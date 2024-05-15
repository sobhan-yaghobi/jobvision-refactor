/*
  Warnings:

  - You are about to alter the column `established_year` on the `company` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `company` MODIFY `established_year` DATETIME NOT NULL;
