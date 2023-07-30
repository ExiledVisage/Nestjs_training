import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { ModuleRef } from '@nestjs/core';
import { get, request } from 'http';
import { UsersService } from './../../users/users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService], imports: [AuthModule],
    })    
    .compile();    

    service = module.get<AuthService>(AuthService);

    
  });



  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
});
