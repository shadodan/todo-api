import {
  FindByParamsOptions,
  ITaskRepository,
} from '../core/repositories/task.repository';
import { Task } from '../core/entities/task.entity';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindAllTaskResponse = Task;

export class FindAllTaskByUserUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(
    findOptions: FindByParamsOptions,
    user: UserToken
  ): Promise<FindAllTaskResponse[]> {
    const tasks = await this.taskRepository.findAllByUser(findOptions, user.id);

    // TODO: Refatorar para retornar objetos ao invés do id das relações
    return tasks.map(task => {
      return {
        id: task.id,
        categoryId: task.categoryId,
        criticalityLevelId: task.criticalityLevelId,
        projectId: task.projectId,
        title: task.title,
        deadline: task.deadline,
        isFinished: task.isFinished,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      } as FindAllTaskResponse;
    });
  }
}
