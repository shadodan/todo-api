import { Injectable } from '@nestjs/common';

import { UserDTO } from '../dto/user.dto';
import { PrismaUserRepository } from '../repositories/prisma.user.repository';

@Injectable()
export class ListUserService {
  constructor(private repository: PrismaUserRepository) {}

  public async execute(): Promise<UserDTO[]> {
    return this.repository.list();
  }
}
