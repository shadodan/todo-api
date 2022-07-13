import { IUserRepository } from '../core/repositories/user.repository';
import { IFindOneUserResponse } from '../core/interfaces/find-one-user-response.interface';
import { DomainError } from '../../../core/domain/errors/domain.error';

export class FindOneUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<IFindOneUserResponse> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new DomainError('User not found');
    }

    return user;
  }
}
