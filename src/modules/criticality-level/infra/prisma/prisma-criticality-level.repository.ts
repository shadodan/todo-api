import { ICriticalityLevelRepository } from '../../core/repositories/criticality-level.repository';
import { CriticalityLevelEntity } from '../../core/entities/criticality-level.entity';
import { prisma } from '../../../../infra/database/prisma/client';

export class PrismaCriticalityLevelRepository
  implements ICriticalityLevelRepository
{
  private repository = prisma.defaultCriticalityLevel;

  async findOne(id: string): Promise<CriticalityLevelEntity | null> {
    return this.repository.findUnique({ where: { id } });
  }

  async findAll(): Promise<CriticalityLevelEntity[]> {
    return this.repository.findMany();
  }

  async findCriticalityIds(): Promise<string[]> {
    const criticalityLevelIds = await this.repository.findMany({
      select: { id: true },
    });

    return criticalityLevelIds.map(elem => elem.id);
  }
}
