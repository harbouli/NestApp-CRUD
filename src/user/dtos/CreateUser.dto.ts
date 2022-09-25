import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { adressDto } from './CreateAdress.dto';

export class createUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => adressDto)
  adress: adressDto;
}
