import { Injectable } from '@nestjs/common';

import { PrismaUserRepository } from '../repositories/prisma.user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private repository: PrismaUserRepository) {}

  public async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
