import { inject, injectable } from 'tsyringe';

import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../../modules/user/core/repositories/user.repository';
import { LoginDto } from '../dto/login.dto';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IJwtAuthProvider } from '../../../core/application/providers/jwt-auth.provider';

@injectable()
export class LoginService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider,
    @inject('JwtAuthProvider')
    private jwtAuthProvider: IJwtAuthProvider
  ) {}

  async execute({ email, password }: LoginDto): Promise<string> {
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

    // TODO: VERIFY IF OCCURS ERROR IN PROMISE DONT RETURNING
    return this.jwtAuthProvider.sign(user);
  }
}
