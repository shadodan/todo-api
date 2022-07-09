import { generateUuidHelper } from '../../../../core/application/helpers/generate-uuid.helper';

export class CriticalityLevelEntity {
  readonly id: string;
  description: string;

  constructor() {
    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
