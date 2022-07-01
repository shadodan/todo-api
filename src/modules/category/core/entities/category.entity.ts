import { User } from '../../../user/core/entities/user.entity';
import { DefaultEntity } from '../../../../core/domain/entities/default.entity';
import { generateUuidHelper } from '../../../../core/application/helpers/generate-uuid.helper';

export class Category extends DefaultEntity {
  readonly id: string;
  name: string;
  colour: string;
  user: User;

  constructor() {
    super();

    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
