import { Injectable } from '@nestjs/common';

import { UserDTO } from '../dto/user.dto';
import { PrismaUserRepository } from '../repositories/prisma.user.repository';

@Injectable()
export class FindUserService {
  constructor(private repository: PrismaUserRepository) {}

  public async execute(id: string): Promise<UserDTO> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
