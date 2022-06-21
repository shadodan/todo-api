import { randomUUID } from 'crypto';

export function generateUuidHelper(): string {
  return randomUUID();
}
