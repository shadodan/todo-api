import { ICreateTaskDto } from './create-task.dto';

export interface IUpdateTaskDto extends Partial<ICreateTaskDto> {
  isFinished?: boolean;
}
