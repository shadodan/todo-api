import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

import { EncoderProvider } from './encoder.provider';

@Injectable()
export class BcryptEncoderProvider implements EncoderProvider {
  private readonly rounds: number = 8;

  async encode(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
