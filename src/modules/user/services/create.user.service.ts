import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

import { IUserDTO } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';
import { BcryptEncoderProvider } from '../../../providers/bcrypt.encoder.provider';

@Injectable()
export class CreateUserService {
  constructor(
    private repository: UserRepository,
    private encoderProvider: BcryptEncoderProvider
  ) {}

  public async execute(data: IUserDTO): Promise<void> {
    const hashedPassword = await this.encoderProvider.encode(data.password);

    await this.repository.create({
      ...data,
      password: hashedPassword,
      id: uuid(),
    });
  }
}
