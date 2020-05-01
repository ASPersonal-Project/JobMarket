import { MongoRepository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { RegisterUserDto } from "./dto/register-user.dto";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User>{
    async signUp(registerUserDto: RegisterUserDto) {
        const { name, email, password } = registerUserDto;

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;

        try {
            await user.save();
        } catch (error) {
            console.log(error);
        }
    }
}