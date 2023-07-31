import { Injectable } from '@nestjs/common';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  private readonly users = [
    {
      userId: 1,
      username: 'Kerem',
      password: '020406',
    },
    {
      userId: 2,
      username: 'maria',
      password: '12maria12',
    },
  ];

  

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  
   
  
}

export class ValidateUser 
{
  
  
}