import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import {PassportModule } from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './constatnts';
import { jwtStraregy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:jwtConstants.secret,
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,jwtStraregy],
  exports:[jwtStraregy]
})
export class AuthModule {}
