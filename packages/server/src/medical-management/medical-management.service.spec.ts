import { Test, TestingModule } from '@nestjs/testing';
import { MedicalManagementService } from './medical-management.service';

describe('MedicalManagementService', () => {
  let service: MedicalManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalManagementService],
    }).compile();

    service = module.get<MedicalManagementService>(MedicalManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
