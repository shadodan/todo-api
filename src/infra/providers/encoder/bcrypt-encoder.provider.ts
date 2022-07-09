import * as bcrypt from 'bcrypt';

import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';

export class BcryptEncoderProvider implements IEncoderProvider {
  private readonly rounds: number = 8;

  async encode(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
