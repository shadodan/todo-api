import { DefaultEntity } from '../../../../core/domain/entities/default.entity';
import { generateUuidHelper } from '../../../../core/application/helpers/generate-uuid.helper';

export class Task extends DefaultEntity {
  readonly id: string;
  ownerId: string;
  categoryId: string;
  criticalityLevelId: string;
  projectId: string | null;
  title: string;
  description: string | null;
  deadline: Date | null;
  isFinished: boolean;

  constructor() {
    super();

    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
