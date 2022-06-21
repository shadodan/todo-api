import { DefaultEntity } from '../../../../core/domain/entities/default.entity';
import { generateUuidHelper } from '../../../../core/application/helpers/generate-uuid.helper';

export class User extends DefaultEntity {
  readonly id: string;
  username: string;
  email: string;
  phone: string;
  password: string;

  constructor() {
    super();

    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
