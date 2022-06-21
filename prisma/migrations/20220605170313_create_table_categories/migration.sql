/*
  Warnings:

  - You are about to drop the column `user_one_id` on the `friendships` table. All the data in the column will be lost.
  - You are about to drop the column `user_two_id` on the `friendships` table. All the data in the column will be lost.
  - Added the required column `id_user_one` to the `friendships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user_two` to the `friendships` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `friendships` DROP FOREIGN KEY `friendships_user_one_id_fkey`;

-- DropForeignKey
ALTER TABLE `friendships` DROP FOREIGN KEY `friendships_user_two_id_fkey`;

-- AlterTable
ALTER TABLE `friendships` DROP COLUMN `user_one_id`,
    DROP COLUMN `user_two_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `id_user_one` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_user_two` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `colour` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_id_user_one_fkey` FOREIGN KEY (`id_user_one`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_id_user_two_fkey` FOREIGN KEY (`id_user_two`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
