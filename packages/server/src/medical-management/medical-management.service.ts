import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Doctors } from './entities/doctors.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MedicalManagementService {
  @InjectEntityManager()
  entityManaget: EntityManager;

  async getAlldoctors() {
    try {
      const serService = new UserService(this.entityManaget);
      const data = await serService.findUserByRoleId(1);
      return {
        code: 0,
        data,
      };
    } catch (error) {
      return {
        code: 1,
        data: [],
        message: '查询数据失败了',
      };
    }
  }
}
