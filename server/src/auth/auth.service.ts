import { Injectable, NotFoundException } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { UserRepository } from './user.repostitory';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/loging-user.dto';
import { jwtPayload } from './interface/jwt-payload.interface';

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
        const userId = await this.userRepository.userValidation(loginUserDto);
        // console.log(user); 
        if(!userId) throw new NotFoundException('Your Email or Password is Wrong');
        const payload:jwtPayload = {id:userId} 
        
        const accessToken:string = this.jwtService.sign(payload);

        return {accessToken};
       
    }
}
