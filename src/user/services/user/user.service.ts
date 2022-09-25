import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  finduser() {
    return {
      id: 1,
      name: 'Mohamed',
    };
  }
}
