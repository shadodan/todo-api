/*
  Warnings:

  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `friendships` (
    `id` VARCHAR(191) NOT NULL,
    `approved` BOOLEAN NOT NULL,
    `user_one_id` VARCHAR(191) NOT NULL,
    `user_two_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_user_one_id_fkey` FOREIGN KEY (`user_one_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_user_two_id_fkey` FOREIGN KEY (`user_two_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
