import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, In } from 'typeorm';
import { UserLoginDto } from './dto/login-user.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { PermissionEntity } from './entities/permission.entity';
@Injectable()
export class UserService {
  @InjectEntityManager()
  entityManager: EntityManager;

  async login(loginUserDto: UserLoginDto) {
    const user = await this.entityManager.findOne(User, {
      where: {
        username: loginUserDto.username,
      },
      relations: {
        roles: true,
      },
    });

    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.ACCEPTED);
    }

    if (user.password !== loginUserDto.password) {
      throw new HttpException('密码错误', HttpStatus.ACCEPTED);
    }

    return user;
  }

  async signUp(createUserDto: UserLoginDto) {
    const { username, password } = createUserDto;
    const res = await this.entityManager.find(User, { where: { username } });
    if (res.length === 0) {
      const data = new User();
      data.username = username;
      data.password = password;
      this.entityManager.save(data);
      return {
        code: 1,
        message: `注册成功`,
      };
    }
    return {
      code: 0,
      message: `用户名已存在`,
    };
  }

  async findRolesByIds(roleIds: number[]) {
    return this.entityManager.find(Role, {
      where: {
        id: In(roleIds),
      },
      relations: {
        permissions: true,
      },
    });
  }

  async getRoleAll() {
    return await this.entityManager.find(PermissionEntity);
  }
}
