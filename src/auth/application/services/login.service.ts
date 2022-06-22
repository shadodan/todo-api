import { inject, injectable } from 'tsyringe';

import { LoginDto } from '../dto/login.dto';
import { AppError } from '../../../core/domain/errors/app.error';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../../core/application/providers/jwt.provider';
import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../../modules/user/core/repositories/user.repository';

@injectable()
export class LoginService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider,
    @inject('JwtProvider')
    private jwtProvider: IJwtProvider
  ) {}

  async execute({ email, password }: LoginDto): Promise<string> {
    if (!email || !password) {
      throw new AppError('Credentials incorrect');
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new DomainError('Credentials incorrect');
    }

    const passwordMatch = await this.encoderProvider.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new DomainError('Credentials incorrect');
    }

    return this.jwtProvider.sign(user);
  }
}
