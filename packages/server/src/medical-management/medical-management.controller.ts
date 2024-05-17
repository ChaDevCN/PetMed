import { Controller, Get, Put, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { RequireLogin } from 'src/common/public-decorator';

import { MedicalManagementService } from './medical-management.service';
import { Doctors } from './entities/doctors.entity';
import { CreateDoctorDTO } from './dto/create-doctor';

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
  @Get('init')
  async init() {
    // this.medicalManagementService.init();
  }
  @Get('departments')
  async getDepartments() {
    return await this.medicalManagementService.getDepartments();
  }
  @Put('set-doctor-departments/:doctorId')
  async setDepartments(@Req() req: Request) {
    return await this.medicalManagementService.setDepartments(req);
  }
  @Put('update-my-doctor-info')
  async updateMyDoctorInfo(@Req() req) {
    return this.medicalManagementService.updateMydoctorInfo(req);
  }

  @Put('update-doctor-info')
  async updatedoctorInfo() {}

  @Post('add-doctor')
  async addDoctor(@Body() createDoctor: CreateDoctorDTO) {
    return await this.medicalManagementService.addDoctor(createDoctor);
  }
}
