import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./interface/user.interface";

export const GetUser = createParamDecorator(
    (data:unknown,ctx:ExecutionContext):User =>{
        const req = ctx.switchToHttp().getRequest();
        return req.user
    }
)