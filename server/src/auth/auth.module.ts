import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { UserRepository } from './user.repostitory';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:'MyScreatKey',
    }),
    MongooseModule.forFeature([{name:'User',schema:userSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService,UserRepository]
})
export class AuthModule {}
