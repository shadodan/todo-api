import { generateUuidHelper } from '../../../../core/application/helpers/generate-uuid.helper';

export class CriticalityLevel {
  readonly id: string;
  description: string;

  constructor() {
    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
