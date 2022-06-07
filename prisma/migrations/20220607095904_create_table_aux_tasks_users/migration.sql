-- CreateTable
CREATE TABLE `aux_tasks_users` (
    `id_user` VARCHAR(191) NOT NULL,
    `id_task` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_user`, `id_task`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aux_tasks_users` ADD CONSTRAINT `aux_tasks_users_id_task_fkey` FOREIGN KEY (`id_task`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
