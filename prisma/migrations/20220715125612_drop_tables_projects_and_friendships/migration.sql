/*
  Warnings:

  - You are about to drop the column `id_project` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the `aux_tasks_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `friendships` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `aux_tasks_users` DROP FOREIGN KEY `aux_tasks_users_id_project_fkey`;

-- DropForeignKey
ALTER TABLE `aux_tasks_users` DROP FOREIGN KEY `aux_tasks_users_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `friendships` DROP FOREIGN KEY `friendships_id_user_one_fkey`;

-- DropForeignKey
ALTER TABLE `friendships` DROP FOREIGN KEY `friendships_id_user_two_fkey`;

-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_id_owner_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_id_project_fkey`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `id_project`;

-- DropTable
DROP TABLE `aux_tasks_users`;

-- DropTable
DROP TABLE `friendships`;

-- DropTable
DROP TABLE `projects`;
