/*
  Warnings:

  - You are about to drop the column `criticality` on the `default_criticality_level` table. All the data in the column will be lost.
  - Added the required column `description` to the `default_criticality_level` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `default_criticality_level` ADD COLUMN `description` VARCHAR(191) NOT NULL;

ALTER TABLE `default_criticality_level` DROP COLUMN `criticality`;