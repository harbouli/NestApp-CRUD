import { Controller, ClassSerializerInterceptor } from '@nestjs/common';
import { Get, Inject, Param, UseInterceptors } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { AuthUserService } from 'src/auth/service/auth-user/auth-user.service';
import { serializedUser } from 'src/auth/types';

@Controller('auth-user')
export class AuthUserController {
  constructor(
    @Inject('User_Service') private readonly autnService: AuthUserService,
  ) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.autnService.getUsers();
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':email')
  getUser(@Param('email') email: string) {
    const user = this.autnService.getUserByEmail(email);
    if (user) return new serializedUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
}
