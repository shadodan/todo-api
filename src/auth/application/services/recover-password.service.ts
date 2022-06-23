import { inject, injectable } from 'tsyringe';

import api from '../../../config/api';
import { AppError } from '../../../core/domain/errors/app.error';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../../core/application/providers/jwt.provider';
import { IEmailProvider } from '../../../core/application/providers/email.provider';
import { IUserRepository } from '../../../modules/user/core/repositories/user.repository';

@injectable()
export class RecoverPasswordService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('JwtProvider')
    private jwtProvider: IJwtProvider,
    @inject('EmailProvider')
    private emailProvider: IEmailProvider
  ) {}

  async execute(email: string): Promise<void> {
    if (!email) {
      throw new AppError('Please enter an email');
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new DomainError('User not found');
    }

    const token = await this.jwtProvider.sign(user);

    const apiConfig = api();

    const recoverPasswordLink = `${apiConfig.API_URL}/auth/change-password/${user.id}/${token}`;

    await this.emailProvider.sendRecoverPasswordEmail(
      email,
      recoverPasswordLink
    );
  }
}
