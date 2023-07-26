import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Req } from '@nestjs/common';
import * as request  from 'supertest';
import { get } from 'http';
import { application } from 'express';


describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService

  const request = require('supertest');
  const assert = require('assert');
  const express = require('express');
  const app = express();

  beforeEach(async () => {
    

    app.get('/user', function(req, res) {
      res.status(200).json({ name: 'Kerem' });
    });

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getProfile', ()=> {
    it('should do its job', async () => 
    {
      const result = ['test'];
      jest.spyOn(controller, 'getProfile').mockImplementation(() => result);

      expect(await controller.getProfile(Req)).toBe(result);
    } )
  })

  describe('Sign in', function() {
    it('responds with json', function(done) 
    {
      request(app)
       .get('/users')
       .auth('Kerem','020406')
       .set('Accept','application/json')
       .expect('Content-type', /json/)
       .expect(200,done)       

    })
  })
});
