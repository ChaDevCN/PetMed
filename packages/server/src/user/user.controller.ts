import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Put,
  Param,
  Req,
  OnModuleInit,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

import { RequireLogin } from 'src/common/public-decorator';
import { RequirePermission } from 'src/common/public-decorator';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController implements OnModuleInit {
  @Inject(JwtService)
  private jwtService: JwtService;
  constructor(private readonly userService: UserService) {}
  onModuleInit() {
    setInterval(() => {
      this.userService.keepConnectionAlive();
    }, 60000);
  }
  @Get('auth')
  @RequireLogin()
  async auth(@Req() req: Request) {
    return await this.userService.findUserByUsername(
      (req.headers.user as any).user.username,
    );
  }

  @Post('login')
  async login(@Body() loginUser: UserLoginDto) {
    const user = await this.userService.login(loginUser);
    console.log(loginUser);

    const token = this.jwtService.sign({
      user: {
        username: user.username,
        roles: user.roles,
      },
    });
    return {
      token,
      code: 1,
    };
  }
  @Post('sign-up')
  async signUp(@Body() loginUser: UserLoginDto) {
    return this.userService.signUp(loginUser);
  }
  @Get('/all-users-details')
  @RequireLogin()
  // @RequirePermission(Permission.ViewRoles)
  async getAllUsersDetails() {
    return await this.userService.findAllUsersWithRolesAndPermissions();
  }
  @Get('/all-permissions')
  async getAllPermissions() {
    return await this.userService.findAllPermissions();
  }
  @Get('/all-roles')
  async getAllRoles() {
    return await this.userService.getAllRoles();
  }
  @Put(':roleId/permissions')
  setPermissions(
    @Param('roleId') roleId: number,
    @Body('permissionIds') permissionIds: number[],
  ) {
    return this.userService.setPermissionsForRole(roleId, permissionIds);
  }

  @Get('/all-menu')
  async init() {
    return this.userService.menu();
  }

  @Post('register')
  async register(@Body() createUser: CreateUserDto) {
    return await this.userService.register(createUser);
  }
  /* 这里应该同时校验token中的user 和 id ！！！！！！！**/
  @Put(':id')
  @RequireLogin()
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.updateUser(id, updateUserDto);
  }
  @Get('permissions')
  @RequireLogin()
  async getPermissions() {
    return await this.userService.getPermissions();
  }
  @Get('role/:roleId')
  @RequireLogin()
  async findUserByRoleId(@Param('roleId') id: string) {
    const transformId = Number(id);
    try {
      const data = await this.userService.findUserByRoleId(transformId);
      return {
        data,
        code: 0,
      };
    } catch (error) {
      return {
        data: [],
        code: 1,
        message: '查询失败了',
      };
    }
  }
  @Get('groups/:group')
  @RequireLogin()
  async findUserByGrouPs(@Param('group') group: string) {
    console.log(group);

    return await this.userService.findUserByGrouPs(group);
  }
}
