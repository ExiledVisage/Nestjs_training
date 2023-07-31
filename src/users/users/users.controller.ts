import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/CreateUserDto.dto';

@Controller('users')
export class UsersControllerController 
{
    constructor(private usersService: UsersService) {}
    


    @Post('/create')
    @UsePipes()
    createUser(@Body() UserDto: CreateUserDto)
    {
      return {data: UserDto}
    }
}