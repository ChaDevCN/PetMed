import { Test, TestingModule } from '@nestjs/testing';
import { MedicalManagementController } from './medical-management.controller';
import { MedicalManagementService } from './medical-management.service';

describe('MedicalManagementController', () => {
  let controller: MedicalManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalManagementController],
      providers: [MedicalManagementService],
    }).compile();

    controller = module.get<MedicalManagementController>(MedicalManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
