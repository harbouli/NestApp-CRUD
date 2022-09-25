import { Injectable } from '@nestjs/common';
import { serializedUser, User } from 'src/auth/types';

@Injectable()
export class AuthUserService {
  private users: User[] = [
    { email: 'Mohamed@harbouli.com', password: 'password1' },
    { email: 'Amjad@harbouli.com', password: 'password2' },
    { email: 'Bahae@harbouli.com', password: 'password3' },
  ];
  getUsers() {
    return this.users.map((user) => new serializedUser(user));
  }
  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
