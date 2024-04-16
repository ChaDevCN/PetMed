import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Put,
  Param,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

import { RequireLogin } from 'src/common/public-decorator';
import { RequirePermission } from 'src/common/public-decorator';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  @Inject(JwtService)
  private jwtService: JwtService;
  constructor(private readonly userService: UserService) {}

  @Get('auth')
  @RequireLogin()
  @RequirePermission('查询 bbb')
  async auth(@Req() req: Request) {
    console.log(req.headers, '6666');

    return {
      code: 1,
    };
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
  async getAllUsersDetails(@Req() request: Request) {
    console.log(request);

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
}
