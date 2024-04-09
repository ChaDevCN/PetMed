import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  @Inject(JwtService)
  private jwtService: JwtService;
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginUser: UserLoginDto) {
    const user = await this.userService.login(loginUser);
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
  // @RequireLogin()
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
}
