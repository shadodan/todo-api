import { inject, injectable } from 'tsyringe';

import { IChangePasswordDto } from '../dto/change-password.dto';
import { AppError } from '../../../core/domain/errors/app.error';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../../core/application/providers/jwt.provider';
import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../../modules/user/core/repositories/user.repository';

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
    // TODO ADD COMMENTS AND VERIFY WHY IT IS NOT WORKING
    if (
      !password ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*.,\/+{\[\]\-;´`~<>}\\?_=§()|]/.test(password) ||
      password.length < 8 ||
      password.trim().length > 255 ||
      !passwordVerification
    ) {
      throw new AppError('Missing required arguments');
    }

    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new DomainError('User not found');
    }

    if (password !== passwordVerification) {
      throw new DomainError('Passwords do not match');
    }

    this.jwtProvider.verify(token);

    const hashedPassword = await this.encoderProvider.encode(password);

    await this.userRepository.update(id, { password: hashedPassword });
  }
}
