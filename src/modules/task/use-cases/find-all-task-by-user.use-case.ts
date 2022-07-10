import { ITaskRepository } from '../core/repositories/task.repository';
import { Task } from '../core/entities/task.entity';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindAllTaskResponse = Pick<
  Task,
  | 'id'
  | 'title'
  | 'categoryId'
  | 'criticalityLevelId'
  | 'deadline'
  | 'isFinished'
>;

export class FindAllTaskByUserUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(user: UserToken): Promise<FindAllTaskResponse[]> {
    const tasks = await this.taskRepository.findAllByUser(user.id);

    // TODO: Refatorar para retornar objetos ao invés do id das relações
    return tasks.map(task => {
      return {
        id: task.id,
        categoryId: task.categoryId,
        criticalityLevelId: task.criticalityLevelId,
        title: task.title,
        deadline: task.deadline,
        isFinished: task.isFinished,
      } as FindAllTaskResponse;
    });
  }
}
