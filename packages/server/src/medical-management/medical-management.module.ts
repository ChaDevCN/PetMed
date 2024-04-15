import { Module } from '@nestjs/common';
import { MedicalManagementService } from './medical-management.service';

@Module({
  providers: [MedicalManagementService],
})
export class MedicalManagementModule {}
