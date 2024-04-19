import { Controller, Get } from '@nestjs/common';

import { RequireLogin } from 'src/common/public-decorator';

import { MedicalManagementService } from './medical-management.service';

@Controller('medical-management')
@RequireLogin()
export class MedicalManagementController {
  constructor(
    private readonly medicalManagementService: MedicalManagementService,
  ) {}
  @Get('all-doctors')
  async getAllDoctors() {
    return await this.medicalManagementService.getAlldoctors();
  }
}
