import { PassportStrategy } from "@nestjs/passport";
import {Strategy,ExtractJwt} from 'passport-jwt';
import { jwtPayload } from "./interface/jwt-payload.interface";
import {Model} from 'mongoose';
import { User } from "./interface/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import { UnauthorizedException } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel('User')
        private userModel:Model<User>
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOkey:'MyScreateKey'
        });
    }

    async validate(payload:jwtPayload):Promise<User>{
        const {id} = payload;

        const user = await this.userModel.findOne({id});
        console.log(user);
        if(!user) throw new UnauthorizedException('User Denied');

        return user
    }

}