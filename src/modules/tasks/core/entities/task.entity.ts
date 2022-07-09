import { DefaultEntity } from '../../../../core/domain/entities/default.entity';
import { generateUuidHelper } from '../../../../core/application/helpers/generate-uuid.helper';

export class Task extends DefaultEntity {
  readonly id: string;
  ownerId: string;
  categoryId: string;
  criticalityId: string;
  title: string;
  description: string;
  deadline: Date;
  isFinished: boolean;

  constructor() {
    super();

    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
