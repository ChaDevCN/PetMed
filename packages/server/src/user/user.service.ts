import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, In } from 'typeorm';
import { UserLoginDto } from './dto/login-user.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { Permission } from './entities/permission.entity';
import { Menu } from './entities/menu.entity';
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
    console.log(user);

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
  async findUserByUsername(username: string) {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('user.username = :username', { username })
      .getOne();
  }
  async findAllUsersWithRolesAndPermissions() {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .leftJoinAndSelect('user.roles', 'role')
      .leftJoinAndSelect('role.permissions', 'permission')
      .getMany();
  }
  async findAllPermissions() {
    return await this.entityManager.find(Permission);
  }
  async getAllRoles() {
    return await this.entityManager
      .createQueryBuilder(Role, 'role')
      .leftJoinAndSelect('role.permissions', 'permission')
      .getMany();
  }
  async setPermissionsForRole(
    roleId: number,
    permissionIds: number[],
  ): Promise<Role> {
    const role = await this.entityManager.findOneOrFail(Role, {
      where: { id: roleId },
    });
    const permissions = await this.entityManager.findByIds(
      Permission,
      permissionIds,
    );

    role.permissions = permissions;

    return this.entityManager.save(Role, role);
  }
  async menu() {
    // const menu1 = new Menu();
    // menu1.name = '医疗管理';
    // menu1.link = '/medical-management/case-center';
    // await this.entityManager.save(menu1);
    // const menu1Children = new Menu();
    // menu1Children.name = '病例中心';
    // menu1Children.link = '/medical-management/case-center';
    // const menu2Children = new Menu();
    // menu2Children.name = '医学报告';
    // menu2Children.link = '/medical-management/diagnostic-reports';

    // const menu3Children = new Menu();
    // menu3Children.name = '患者预约';
    // menu3Children.link = '/medical-management/appointments';

    // const menu5Children = new Menu();
    // menu5Children.name = '医生资源';
    // menu5Children.link = '/medical-management/doctor-resources';
    // const parent = await this.entityManager.findOne(Menu, {
    //   where: {
    //     name: '医疗管理',
    //   },
    // });
    // if (parent) {
    //   menu1Children.parent = parent;
    //   menu2Children.parent = parent;
    //   menu3Children.parent = parent;
    //   menu5Children.parent = parent;
    // }
    // await this.entityManager.save(Menu, menu1Children);
    // await this.entityManager.save(Menu, menu2Children);
    // await this.entityManager.save(Menu, menu3Children);
    // await this.entityManager.save(Menu, menu5Children);

    return this.entityManager.getTreeRepository(Menu).findTrees();
  }
}
