import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
    UsePipes
  } from '@nestjs/common';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Http2Server } from 'http2';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from 'src/dto/CreateUserDto.dto';
import { any } from 'joi';
import * as Joi from 'joi'


export interface SingInDto
{        
    username: string;    
    password: string;
}

const userSchema = Joi.object(
  {
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    

    



  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(new JoiValidationPipe(userSchema))
    signIn(@Body() signInDto: SingInDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }



