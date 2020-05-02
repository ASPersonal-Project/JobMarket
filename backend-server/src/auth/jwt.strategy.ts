import { PassportStrategy } from "@nestjs/passport"
import {Strategy,ExtractJwt} from 'passport-jwt'
import { jwtConstants } from "./constatnts"
import { jwtPayload } from "./interface/jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";

@Injectable()
export class jwtStraregy extends PassportStrategy(Strategy){
    constructor(
        private userRepository: UserRepository,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:jwtConstants.secret
        });
    }

    async validate(payload:jwtPayload):Promise<User>{
        const {name} = payload;
        // console.log(name);
        // const user = await this.userRepository.findOne({name});
        // const _idn = "5eacc891950f52146c7dcd4a"
        const user = await this.userRepository.findOne({name});
        // console.log(user);
        // console.log(user);
        if(!user) throw new UnauthorizedException('User denied');

        return user;
    }
}