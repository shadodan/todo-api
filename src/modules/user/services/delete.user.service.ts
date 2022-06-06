import { Injectable } from '@nestjs/common';

import { UserRepository } from '../repository/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private repository: UserRepository) {}

  public async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
