import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

import { IUserDTO } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private repository: UserRepository) {}

  public async execute(data: IUserDTO): Promise<void> {
    await this.repository.create({ ...data, id: uuid() });
  }
}