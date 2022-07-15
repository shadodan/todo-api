-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `id_project` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_id_project_fkey` FOREIGN KEY (`id_project`) REFERENCES `projects`(`id_project`) ON DELETE SET NULL ON UPDATE CASCADE;
