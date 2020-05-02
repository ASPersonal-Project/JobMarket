import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { LogUserDto } from './dto/log-user.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from './interface/jwt-payload.interface';
import { ObjectID } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtServide:JwtService
    ) { }
    
    async signUp(registerUserDto: RegisterUserDto) {
        return await this.userRepository.signUp(registerUserDto);
    }

    async signIn(logUserDto: LogUserDto):Promise<{accessToken:string}> {
        const name= await this.userRepository.validateUserPassword(logUserDto);
        // console.log(name);
        if(!name) throw new UnauthorizedException('Plese Register first');
        // console.log(userId);
        const payload:jwtPayload = {name};
        const accessToken:string = this.jwtServide.sign(payload);
        return {accessToken};
    }
}
