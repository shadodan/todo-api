/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `friendships` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `friendships` DROP COLUMN `deleted_at`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `deleted_at`,
    DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `default_criticality` (
    `id` VARCHAR(191) NOT NULL,
    `criticality` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `deadline` DATETIME(3) NULL,
    `is_finished` BOOLEAN NOT NULL,
    `id_owner` VARCHAR(191) NOT NULL,
    `id_category` VARCHAR(191) NOT NULL,
    `id_default_criticality` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aux_tasks_users` (
    `id_user` VARCHAR(191) NOT NULL,
    `id_task` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_user`, `id_task`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_owner_fkey` FOREIGN KEY (`id_owner`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_default_criticality_fkey` FOREIGN KEY (`id_default_criticality`) REFERENCES `default_criticality`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_task_fkey` FOREIGN KEY (`id_task`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
