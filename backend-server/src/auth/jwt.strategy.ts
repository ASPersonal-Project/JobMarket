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
        const {userId} = payload;
        const user = await this.userRepository.findOne({_id:userId});
        if(!user) throw new UnauthorizedException('User denied');

        return user;
    }
}