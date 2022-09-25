import { Module } from '@nestjs/common';
import { AuthUserController } from './controller/auth-user/auth-user.controller';
import { AuthUserService } from './service/auth-user/auth-user.service';

@Module({
  controllers: [AuthUserController],
  providers: [
    {
      provide: 'User_Service',
      useClass: AuthUserService,
    },
  ],
})
export class AuthModule {}
