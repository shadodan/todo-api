import { ILoginDto } from '../dto/login.dto';
import { AppError } from '../../../core/domain/errors/app.error';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IJwtProvider } from '../../../core/application/providers/jwt.provider';
import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../../modules/user/core/repositories/user.repository';

type LoginResponse = {
  status: boolean;
  token: string;
};

export class LoginService {
  constructor(
    private userRepository: IUserRepository,
    private encoderProvider: IEncoderProvider,
    private jwtProvider: IJwtProvider
  ) {}

  async execute({ email, password }: ILoginDto): Promise<LoginResponse> {
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

    return { status: true, token: await this.jwtProvider.sign(user) };
  }
}
