import { Injectable } from '@nestjs/common';

import { IUserDTO } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UpdateUserService {
  constructor(private repository: UserRepository) {}

  public async execute(id: string, data: IUserDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
