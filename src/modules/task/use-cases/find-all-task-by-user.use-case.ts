import {
  FindByParamsOptions,
  ITaskRepository,
} from '../core/repositories/task.repository';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { IFindAllTaskResponse } from '../core/interfaces/find-all-task-response.interface';

export class FindAllTaskByUserUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(
    findOptions: FindByParamsOptions,
    user: UserToken
  ): Promise<IFindAllTaskResponse[]> {
    return await this.taskRepository.findAllByUser(findOptions, user.id);
  }
}
