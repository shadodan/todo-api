/*
  Warnings:

  - You are about to drop the `aux_tasks_projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `aux_tasks_projects` DROP FOREIGN KEY `aux_tasks_projects_id_project_fkey`;

-- DropForeignKey
ALTER TABLE `aux_tasks_projects` DROP FOREIGN KEY `aux_tasks_projects_id_task_fkey`;

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `description` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `aux_tasks_projects`;
