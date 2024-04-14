import { Injectable } from '@nestjs/common';
import { CreateMedicalManagementDto } from './dto/create-medical-management.dto';
import { UpdateMedicalManagementDto } from './dto/update-medical-management.dto';

@Injectable()
export class MedicalManagementService {
  create(createMedicalManagementDto: CreateMedicalManagementDto) {
    return 'This action adds a new medicalManagement';
  }

  findAll() {
    return `This action returns all medicalManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalManagement`;
  }

  update(id: number, updateMedicalManagementDto: UpdateMedicalManagementDto) {
    return `This action updates a #${id} medicalManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalManagement`;
  }
}
