/*
  Warnings:

  - The primary key for the `aux_tasks_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_task` on the `aux_tasks_users` table. All the data in the column will be lost.
  - You are about to drop the column `id_default_criticality` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `id_project` to the `aux_tasks_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_default_criticality_level` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `aux_tasks_users` DROP FOREIGN KEY `aux_tasks_users_id_task_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_id_default_criticality_fkey`;

-- AlterTable
ALTER TABLE `aux_tasks_users` DROP PRIMARY KEY,
    DROP COLUMN `id_task`,
    ADD COLUMN `id_project` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_user`, `id_project`);

-- AlterTable
ALTER TABLE `friendships` ADD COLUMN `since` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `id_default_criticality`,
    ADD COLUMN `id_default_criticality_level` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `image` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `projects` (
    `id_project` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `is_finished` BOOLEAN NOT NULL,
    `finished_date` DATETIME(3) NOT NULL,
    `id_owner` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_project`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aux_tasks_projects` (
    `id_task` VARCHAR(191) NOT NULL,
    `id_project` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_task`, `id_project`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_default_criticality_level_fkey` FOREIGN KEY (`id_default_criticality_level`) REFERENCES `default_criticality_level`(`id_default_criticality_level`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_id_owner_fkey` FOREIGN KEY (`id_owner`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_projects` ADD CONSTRAINT `aux_tasks_projects_id_task_fkey` FOREIGN KEY (`id_task`) REFERENCES `tasks`(`id_task`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_projects` ADD CONSTRAINT `aux_tasks_projects_id_project_fkey` FOREIGN KEY (`id_project`) REFERENCES `projects`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_project_fkey` FOREIGN KEY (`id_project`) REFERENCES `projects`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;
