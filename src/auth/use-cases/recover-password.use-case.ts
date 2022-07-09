import api from '../../config/api';
import emailConfigurations from '../../config/email';
import { AppError } from '../../core/domain/errors/app.error';
import { DomainError } from '../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../core/application/providers/jwt.provider';
import { IEmailProvider } from '../../core/application/providers/email.provider';
import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import { recoverPasswordMessage } from '../../core/domain/assets/email/recover-password-message';

export class RecoverPasswordUseCase {
  constructor(
    private userRepository: IUserRepository,
    private jwtProvider: IJwtProvider,
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

    const token = await this.jwtProvider.sign(user, '15m');

    const apiConfig = api();
    const emailConfig = emailConfigurations();

    const from = `${emailConfig.SUPPORT_NAME} <${emailConfig.SUPPORT_EMAIL}>`;

    const recoverPasswordLink = `${apiConfig.API_URL}/auth/change-forgotten-password/${user.id}/${token}`;

    await this.emailProvider.sendEmail(
      from,
      email,
      'Recover your password',
      recoverPasswordMessage(recoverPasswordLink)
    );
  }
}
