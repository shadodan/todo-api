import { inject, injectable } from 'tsyringe';

import { IChangePasswordDto } from '../dto/change-password.dto';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../../core/application/providers/jwt.provider';
import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../../modules/user/core/repositories/user.repository';
import { changeForgottenPasswordValidator } from '../validators/change-forgotten-password.validator';

@injectable()
export class ChangeForgottenPasswordService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider,
    @inject('JwtProvider')
    private jwtProvider: IJwtProvider
  ) {}

  async execute(
    id: string,
    token: string,
    { password, passwordVerification }: IChangePasswordDto
  ): Promise<void> {
    // Verifies if the password is secure and valid
    changeForgottenPasswordValidator(password, passwordVerification);

    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new DomainError('User not found');
    }

    this.jwtProvider.verify(token);

    const hashedPassword = await this.encoderProvider.encode(password);

    await this.userRepository.update(id, { password: hashedPassword });
  }
}
