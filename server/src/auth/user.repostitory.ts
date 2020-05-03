import {Model} from 'mongoose'
import { User } from './interface/user.interface';
import { RegisterUserDto } from './dto/register-user.dto';
import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { LoginUserDto } from './dto/loging-user.dto';
export class UserRepository{
    constructor(
        @InjectModel('User')
        private userModel:Model<User>
    ){}
    async signUp(registerUserDto:RegisterUserDto){
        const {name,email,password} = registerUserDto;

        const user = new this.userModel({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt)
        try {
             await user.save()
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException()
        }

    }
    async userValidation(loginUserDto:LoginUserDto):Promise<string>{
        const {email,password} = loginUserDto;
        try {
            const user =  await this.userModel.findOne({email});

            if(user && user.comparePassword(password)){
                return user.name;
            }else{
                return null;
            }

        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException()
        }
    }
}