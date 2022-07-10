export interface IFindAllTaskResponse {
  id: string;
  category: {
    name: string;
    colour: string;
  };
  criticalityLevel: {
    description: string;
  };
  title: string;
  description: string;
  deadline: Date | null;
  isFinished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
