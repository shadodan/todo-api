import { PrismaClient } from '@prisma/client';
import {
  INestApplication,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    await this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
