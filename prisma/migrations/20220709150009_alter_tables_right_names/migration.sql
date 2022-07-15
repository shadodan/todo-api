/*
  Warnings:

  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `categories` table. All the data in the column will be lost.
  - The primary key for the `friendships` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deleted_at` on the `friendships` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `friendships` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deleted_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - Added the required column `id_category` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_friendship` to the `friendships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `categories` DROP FOREIGN KEY `categories_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `friendships` DROP FOREIGN KEY `friendships_id_user_one_fkey`;

-- DropForeignKey
ALTER TABLE `friendships` DROP FOREIGN KEY `friendships_id_user_two_fkey`;

-- AlterTable
ALTER TABLE `categories` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id_category` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD PRIMARY KEY (`id_category`);

-- AlterTable
ALTER TABLE `friendships` DROP PRIMARY KEY,
    DROP COLUMN `deleted_at`,
    DROP COLUMN `id`,
    ADD COLUMN `id_friendship` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_friendship`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `deleted_at`,
    DROP COLUMN `id`,
    DROP COLUMN `image`,
    ADD COLUMN `id_user` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_user`);

-- CreateTable
CREATE TABLE `default_criticality_level` (
    `id_default_criticality_level` VARCHAR(191) NOT NULL,
    `criticality` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_default_criticality_level`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id_task` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `deadline` DATETIME(3) NULL,
    `is_finished` BOOLEAN NOT NULL,
    `id_owner` VARCHAR(191) NOT NULL,
    `id_category` VARCHAR(191) NOT NULL,
    `id_default_criticality` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_task`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aux_tasks_users` (
    `id_user` VARCHAR(191) NOT NULL,
    `id_task` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_user`, `id_task`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_id_user_one_fkey` FOREIGN KEY (`id_user_one`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_id_user_two_fkey` FOREIGN KEY (`id_user_two`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_owner_fkey` FOREIGN KEY (`id_owner`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id_category`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_default_criticality_fkey` FOREIGN KEY (`id_default_criticality`) REFERENCES `default_criticality_level`(`id_default_criticality_level`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_task_fkey` FOREIGN KEY (`id_task`) REFERENCES `tasks`(`id_task`) ON DELETE RESTRICT ON UPDATE CASCADE;
