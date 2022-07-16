import { AppError } from '../../core/domain/errors/app.error';
import { DomainError } from '../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../core/application/providers/jwt.provider';
import { IEmailProvider } from '../../core/application/providers/email.provider';
import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import {
  recoverPasswordHtmlForEmail,
  recoverPasswordSubject,
  recoverPasswordTextForEmail,
  supportEmail,
} from '../../core/domain/assets/email/recover-password.assets';

export class RecoverPasswordByEmailUseCase {
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

    await this.emailProvider.sendEmail(
      supportEmail,
      email,
      recoverPasswordSubject,
      recoverPasswordTextForEmail(user.id, token),
      recoverPasswordHtmlForEmail(user.id, token)
    );
  }
}
