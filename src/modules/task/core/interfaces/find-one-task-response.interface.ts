export interface IFindOneTaskResponse {
  id: string;
  category: {
    name: string;
    colour: string;
  };
  criticalityLevel: {
    description: string;
  };
  project: {
    id: string;
  } | null;
  title: string;
  description: string;
  deadline: Date | null;
  isFinished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
