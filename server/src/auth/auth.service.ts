import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repostitory';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userRepository:UserRepository
    ){}

    signUp(registerUserDto:RegisterUserDto){
        return this.userRepository.signUp(registerUserDto);
    }
}
