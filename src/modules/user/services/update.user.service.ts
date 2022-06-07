import { Injectable } from '@nestjs/common';

import { UpdateUserDTO } from '../dto/user.dto';
import { PrismaUserRepository } from '../repositories/prisma.user.repository';

@Injectable()
export class UpdateUserService {
  constructor(private repository: PrismaUserRepository) {}

  public async execute(id: string, data: UpdateUserDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
