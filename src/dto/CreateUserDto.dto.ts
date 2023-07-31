import { IsNotEmpty, IsNumber } from "class-validator";
import Joi from "joi";


export class CreateUserDto 
{    
    userId: number;
    
    username: string;
    
    password: string;
}





