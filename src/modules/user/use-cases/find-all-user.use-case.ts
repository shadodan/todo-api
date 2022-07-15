import { IUserRepository } from '../core/repositories/user.repository';
import { IFindAllUserResponse } from '../core/interfaces/find-all-user-response.interface';

export class FindAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IFindAllUserResponse[]> {
    return await this.userRepository.findAll();
  }
}
