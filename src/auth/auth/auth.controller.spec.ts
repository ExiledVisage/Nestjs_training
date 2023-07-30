import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Req } from '@nestjs/common';
import * as request  from 'supertest';
import { get } from 'http';
import { application } from 'express';
import { AuthGuard } from './auth.guard';
import { UsersService } from './../../users/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { INestApplication } from '@nestjs/common';
import { Any } from 'typeorm';
import { ArrayMaxSize } from 'class-validator';


describe('AuthController', () => {
  let authGuard: AuthGuard;
  let authController: AuthController;
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;
  let app: INestApplication;

  const request = require('supertest');
  const assert = require('assert');
  const express = require('express');  

  beforeEach(async () => {
    
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, JwtService, AuthService],
      controllers: [AuthController],
    }).compile();

    
   
    
    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
    
    app = module.createNestApplication();
      
  });
  

  it('should be defined', () => {
    expect(authController).toBeDefined();
    expect(authService).toBeDefined();
    expect(usersService).toBeDefined();
    expect(jwtService).toBeDefined();
    
  });


  describe('Sign in', function() {
   /* it('should sign in ', function(done) 
    {

      request(app)
       .get('/users')
       .auth('Kerem','020406')
       .set('Accept','application/json')       
       .expect('Content-type', /json/)
       .expect(200,done)       

    }) */

    it ('should sign in',async ()=>
    {
      const userInfo = {username: 'Kerem', password: '020406'}
      const expectedResult =  authService.signIn(userInfo.username,userInfo.password); 

      jest.spyOn(authController, 'signIn').mockImplementation(()=>expectedResult);
      
      expect(await authController.signIn(userInfo)).toBe(expectedResult);

    })
  })

  describe('getProfile', ()=> {
    it('should do its job', async () => 
    {
      const expectedResult = ['expectedResult'];
      jest.spyOn(authController, 'getProfile').mockImplementation(() => expectedResult);

      expect(await authController.getProfile(Req)).toBe(expectedResult);
    } )
  })
});
