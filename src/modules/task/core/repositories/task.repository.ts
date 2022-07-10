import { Task } from '../entities/task.entity';
import { IFindAllTaskResponse } from '../interfaces/find-all-task-response.interface';
import { IFindOneTaskResponse } from '../interfaces/find-one-task-response.interface';

export type FindByParamsOptions = {
  ownerId?: string;
  categoryId?: string;
  criticalityId?: string;
  title?: string;
  description?: string;
  deadline?: string;
  isFinished?: string;
};

export interface ITaskRepository {
  create(data: Task): Promise<void>;

  findAllByUser(
    findOptions: FindByParamsOptions,
    userId: string
  ): Promise<IFindAllTaskResponse[]>;

  findOne(id: string, userId: string): Promise<IFindOneTaskResponse | null>;

  findById(id: string, userId: string): Promise<Task | null>;

  update(id: string, data: Partial<Task>): Promise<void>;

  remove(id: string): Promise<void>;
}
