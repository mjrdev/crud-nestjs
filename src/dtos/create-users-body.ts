// import { IsNotEmpty } from 'class-validator';
import { Length, IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @Length(3, 250)
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string
}