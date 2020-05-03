import { PassportStrategy } from "@nestjs/passport"
import {Strategy,ExtractJwt} from 'passport-jwt'
import { jwtPayload } from "./interface/jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import {Model} from 'mongoose'
import { User } from "./interface/user.interface";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class jwtStraregy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel('User')
        private userModel:Model<User>
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'MyScreatKey'
        });
    }

    async validate(payload:jwtPayload):Promise<User>{
        const {name} = payload;
        const user = await this.userModel.findOne({name});
        if(!user) throw new UnauthorizedException('User denied');

        return user;
    }
}