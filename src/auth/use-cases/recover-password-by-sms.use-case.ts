import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import { ISmsProvider } from '../../core/application/providers/sms.provider';
import { IJwtProvider } from '../../core/application/providers/jwt.provider';
import { DomainError } from '../../core/domain/errors/domain.error';
import {
  recoverPasswordContact,
  recoverPasswordTextForSms,
} from '../../core/domain/assets/sms/recover-password.assets';

export class RecoverPasswordBySmsUseCase {
  constructor(
    private userRepository: IUserRepository,
    private jwtProvider: IJwtProvider,
    private smsProvider: ISmsProvider
  ) {}

  async execute(phone: string): Promise<void> {
    const user = await this.userRepository.findByPhone(phone);

    if (!user) {
      throw new DomainError('User not found');
    }

    const token = await this.jwtProvider.sign(user, '15m');

    await this.smsProvider.sendSms(
      recoverPasswordContact,
      phone,
      recoverPasswordTextForSms(user.id, token)
    );
  }
}
