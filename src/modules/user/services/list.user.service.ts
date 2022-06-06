import { Injectable } from '@nestjs/common';

import { IUserDTO } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class ListUserService {
  constructor(private repository: UserRepository) {}

  public async execute(): Promise<IUserDTO[]> {
    return this.repository.list();
  }
}
