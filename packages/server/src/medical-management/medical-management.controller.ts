import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalManagementService } from './medical-management.service';
import { CreateMedicalManagementDto } from './dto/create-medical-management.dto';
import { UpdateMedicalManagementDto } from './dto/update-medical-management.dto';

@Controller('medical-management')
export class MedicalManagementController {
  constructor(private readonly medicalManagementService: MedicalManagementService) {}

  @Post()
  create(@Body() createMedicalManagementDto: CreateMedicalManagementDto) {
    return this.medicalManagementService.create(createMedicalManagementDto);
  }

  @Get()
  findAll() {
    return this.medicalManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalManagementDto: UpdateMedicalManagementDto) {
    return this.medicalManagementService.update(+id, updateMedicalManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalManagementService.remove(+id);
  }
}
