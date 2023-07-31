import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersControllerController } from './users.controller/users.controller.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersControllerController],
})
export class UsersModule {}
