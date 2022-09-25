import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/user/dtos/CreateUser.dto';
import { user } from 'src/user/types/users';

@Injectable()
export class UserService {
  private users: user[] = [
    {
      id: 1,
      name: 'Mohamed',
      email: 'Moh@har.com',
    },
    {
      id: 2,
      name: 'Amjad',
      email: 'amjad@gmail.com',
    },
    {
      id: 3,
      name: 'Jinan',
      email: 'jinan@gmail.com',
    },
    {
      id: 4,
      name: 'Bahae',
      email: 'Bahae@gmail.com',
    },
  ];
  findUserByID(id: number) {
    return this.users.find((user) => user.id === id);
  }
  getAllUsers() {
    return this.users;
  }
  createUser(createUserDto: createUserDto) {
    this.users.push(createUserDto);
  }
}
