import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, In } from 'typeorm';
import { UserLoginDto } from './dto/login-user.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { Permission } from './entities/permission.entity';
import { Menu } from './entities/menu.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInfo } from './entities/userInfo.entity';
import { UpdateUserDto } from './dto/update-user.dto';
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
  async register(createUser: CreateUserDto) {
    const { password, username, nickName, email } = createUser;
    try {
      const userExists = await this.entityManager.findOne(User, {
        where: { username },
      });
      if (userExists) {
        return { code: 1, message: '注册失败，用户名已存在' };
      }

      // Start transaction
      const res = await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          const user = new User();
          const userInfo = new UserInfo();
          user.username = username;
          user.password = password;
          userInfo.nickName = nickName;
          userInfo.email = email;
          user.userInfo = userInfo;

          const data = await transactionalEntityManager.save(User, user);

          return {
            code: 0,
            message: '用户注册成功',
            data,
          };
        },
      );
      return res;
    } catch (error) {
      console.error('Registration error:', error);
      return { code: 1, message: '出错了，注册过程中发生错误' };
    }
  }

  async updateUser(id, updateUser: UpdateUserDto) {
    const { username, password, ...updateData } = updateUser;

    try {
      const user = await this.entityManager.findOne(User, {
        where: { id },
        relations: ['userInfo'],
      });

      if (!user) {
        return { code: 1, message: '用户不存在' };
      }

      // 使用 merge 更新 User 实体
      const nextUser = this.entityManager.merge(User, user, {
        username,
        password,
      });

      // 如果 userInfo 是关联对象，可能需要单独处理
      if (nextUser.userInfo) {
        if (!user.userInfo) {
          user.userInfo = new UserInfo();
        }
        this.entityManager.merge(UserInfo, user.userInfo, updateData);
      }

      await this.entityManager.save(user);
      return { code: 0, message: '用户信息更新成功' };
    } catch (error) {
      console.error('Update error:', error);
      return { code: 1, message: '更新过程中发生错误' };
    }
  }
  async getPermissions() {
    try {
      const permissions = this.entityManager.find(Permission);
      return {
        data: permissions,
        code: 0,
      };
    } catch (err) {
      return {
        code: 1,
        message: `查询失败了,${err?.message}`,
      };
    }
  }
}
