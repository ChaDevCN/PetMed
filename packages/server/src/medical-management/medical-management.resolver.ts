import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalManagementService } from './medical-management.service';
import { Doctors } from './entities/doctors.entity';

@Resolver(() => Doctors)
export class MedicalManagementResolver {
  constructor(
    private readonly medicalManagementService: MedicalManagementService,
  ) {}
}
