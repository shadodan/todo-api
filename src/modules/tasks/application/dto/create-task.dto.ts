export interface ICreateTaskDto {
  categoryId: string;
  criticalityId: string;
  title: string;
  description: string;
  deadline: Date;
}
