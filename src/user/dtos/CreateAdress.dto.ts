import { IsNotEmpty } from 'class-validator';

export class adressDto {
  @IsNotEmpty()
  line1: string;
  line2?: string;
  @IsNotEmpty()
  Zip: string;
  @IsNotEmpty()
  state: string;
}
