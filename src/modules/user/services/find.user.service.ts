import { Injectable } from '@nestjs/common';

import { IUserDTO } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class FindUserService {
  constructor(private repository: UserRepository) {}

  public async execute(id: string): Promise<IUserDTO> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
