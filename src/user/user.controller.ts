import { Controller, Get } from '@nestjs/common';
import { UserService } from './services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getusers() {
    return this.userService.finduser();
  }
}
