import { Exclude } from 'class-transformer';

export interface User {
  email: string;
  password: string;
}

export class serializedUser {
  email: string;
  @Exclude()
  password: string;
  constructor(partial: Partial<serializedUser>) {
    Object.assign(this, partial);
  }
}
