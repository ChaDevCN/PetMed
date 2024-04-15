import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, In } from 'typeorm';
import { MedicalManagementService } from './medical-management.service';
import { Doctors } from './entities/doctors.entity';
import { RequirePermission } from 'src/common/public-decorator';

@Resolver((of) => Doctors)
export class DoctorsResolver {
  constructor(
    private readonly medicalManagementService: MedicalManagementService,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  @Query((returns) => Doctors)
  // @RequirePermission('新增 aaa')
  async getAll() {
    return await this.entityManager.find(Doctors);
  }
}
