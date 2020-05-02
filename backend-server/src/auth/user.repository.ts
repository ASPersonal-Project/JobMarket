import { MongoRepository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { RegisterUserDto } from "./dto/register-user.dto";
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { LogUserDto } from "./dto/log-user.dto";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User>{
    async signUp(registerUserDto: RegisterUserDto) {
        const { name, email, password } = registerUserDto;

        const salt = await bcrypt.genSalt(10);
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = await this.hashPassword(password,salt);

        try {
            await user.save();
        } catch (error) {
            console.log(error.code);
            if (error.code === 11000) {
                throw new ConflictException('Your email is already exist');
            } else {
                throw new InternalServerErrorException()
            }
        }
    }

    async validateUserPassword(logUserDto: LogUserDto):Promise<string>{
        const { email, password } = logUserDto;
        try {
            const user = await this.findOne({ email }); 
            
            if (user && await user.validatePassword(password)) {
                return user._id;
            } else {
                return null;
            }
        } catch (error) {
            throw new InternalServerErrorException();
        }
        

    }

    private async hashPassword(password: string, salt: string) {
        return await bcrypt.hash(password,salt)
    }
}