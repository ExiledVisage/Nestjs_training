import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateUserDto 
{
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}