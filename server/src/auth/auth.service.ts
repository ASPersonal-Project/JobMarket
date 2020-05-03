import { Injectable, NotFoundException, Post, UseGuards, Req } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { UserRepository } from './user.repostitory';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/loging-user.dto';
import { jwtPayload } from './interface/jwt-payload.interface';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthService {
    constructor(
        private userRepository:UserRepository,
        private jwtService:JwtService,
    ){}

    signUp(registerUserDto:RegisterUserDto){
        return this.userRepository.signUp(registerUserDto);
    }

    async signIn(loginUserDto:LoginUserDto):Promise<{accessToken:string}>{
        const name = await this.userRepository.userValidation(loginUserDto);
        // console.log(name); 
        if(!name) throw new NotFoundException('Your Email or Password is Wrong');
        const payload:jwtPayload = {name} 
        // console.log(payload);
        const accessToken:string = this.jwtService.sign(payload);

        return {accessToken};
       
    }
   
}
