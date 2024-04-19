import { Module } from '@nestjs/common';
import { MedicalManagementService } from './medical-management.service';
import { MedicalManagementController } from './medical-management.controller';

@Module({
  controllers: [MedicalManagementController],
  providers: [MedicalManagementService],
})
export class MedicalManagementModule {}
