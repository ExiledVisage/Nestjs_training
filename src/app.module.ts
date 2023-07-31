import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth/auth.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { UsersControllerController } from './users.controller/users.controller.controller';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal: true}), 
    AuthModule],

  controllers: [AppController, UsersControllerController],
  providers: [AppService],
})
export class AppModule {}
