import { generateUuidHelper } from '../../helpers/generate-uuid.helper';

export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = generateUuidHelper();
    }
  }
}
