import { PartialType } from '@nestjs/swagger';
import { CreateMedicalManagementDto } from './create-medical-management.dto';

export class UpdateMedicalManagementDto extends PartialType(CreateMedicalManagementDto) {}
