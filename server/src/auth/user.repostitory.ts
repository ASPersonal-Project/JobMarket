import {Model} from 'mongoose'
import { User } from './interface/user.interface';
import { RegisterUserDto } from './dto/register-user.dto';
export class UserRepository{
    constructor(
        private userModel:Model<User>
    ){}
    signUp(registerUserDto:RegisterUserDto){
        const {name,email,password} = registerUserDto;
    }
}