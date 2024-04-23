import { Inject, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Request } from 'express';
import { Doctors } from './entities/doctors.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Department } from './entities/department.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MedicalManagementService {
  @InjectEntityManager()
  entityManaget: EntityManager;
  @Inject(JwtService)
  private jwtService: JwtService;
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
  async init() {
    // const department = new Department();
    // department.name = '儿童病院';
    // const c1 = new Department();
    // c1.name = '小儿泌尿外壳';
    // c1.parent = department;
    // const c2 = new Department();
    // c2.name = '小儿便秘门诊';
    // c2.parent = department;
    // const c3 = new Department();
    // c3.name = '小儿肿瘤门诊';
    // c3.parent = department;
    // const c4 = new Department();
    // c4.name = '小儿内科门诊';
    // c4.parent = department;
    // const c5 = new Department();
    // c5.name = '儿科神经专病门诊';
    // c5.parent = department;
    // const c6 = new Department();
    // c6.name = '新生儿门诊';
    // c6.parent = department;
    // const c7 = new Department();
    // c7.name = '儿童保健门诊';
    // c7.parent = department;
    // await this.entityManaget.save(Department, department);
    // await this.entityManaget.save(Department, c1);
    // await this.entityManaget.save(Department, c2);
    // await this.entityManaget.save(Department, c3);
    // await this.entityManaget.save(Department, c4);
    // await this.entityManaget.save(Department, c5);
    // await this.entityManaget.save(Department, c6);
    // await this.entityManaget.save(Department, c6);
    // const doctors = new Doctors();
    // doctors.age = 30;
    // doctors.gender = 1;
    // doctors.phoneNumber = '13310451054';
    // doctors.status = 1;
    // doctors.experience = 3;
    // doctors.name = 'Jacl';
    // await this.entityManaget.save(Doctors, doctors);
    // const doctor = await this.entityManaget.findOne(Doctors, {
    //   where: { id: 1 },
    // });
    // console.log(doctor);
    // const user = await this.entityManaget.findOne(User, {
    //   where: { id: 1 },
    // });
    // if (doctor && user) {
    //   user.doctor = doctor;
    // }
    // const data = await this.entityManaget.save(User, user);
    // return {
    //   code: 1,
    //   data,
    // };
  }
  async getDepartments() {
    try {
      const data = await this.entityManaget
        .getTreeRepository(Department)
        .findTrees();
      return {
        code: 0,
        data,
      };
    } catch (error) {
      return {
        data: [],
        error,
        code: 1,
        message: '获取数据失败了',
      };
    }
  }
  async setDepartments(req: Request) {
    const doctorId = parseInt(req.params.doctorId);
    const departmentId = parseInt(req.body.departmentId);
    if (!departmentId) {
      return {
        code: 1,
        message: '科室信息不合法',
      };
    }
    try {
      const doctor = await this.entityManaget.findOne(Doctors, {
        where: { id: doctorId },
      });
      const department = await this.entityManaget.findOne(Department, {
        where: {
          id: departmentId,
        },
      });
      if (!doctor || !department) {
        return {
          code: 1,
          message: '非法信息',
        };
      }
      doctor.department = department;
      const data = await this.entityManaget.save(Doctors, doctor);
      return {
        data,
        code: 0,
        message: '设置成功',
      };
    } catch (error) {
      return {
        code: 1,
        message: '未知错误，请稍后再试',
      };
    }
  }
  async updateMydoctorInfo(req) {
    const serService = new UserService(this.entityManaget, this.jwtService);
    const { doctor } = await serService.getInfoBytoken(req);
    return {
      code: 1,
      doctor,
    };
  }
}
