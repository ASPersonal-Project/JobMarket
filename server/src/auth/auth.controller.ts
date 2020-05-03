import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loging-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}

    @Post('/signup')
    signUp(@Body() registerUserDto:RegisterUserDto){
        return this.authService.signUp(registerUserDto);
    }

    @Post('/signin')
    signIn(@Body() loginUserDto:LoginUserDto):Promise<{accessToken:string}>{
        return this.authService.signIn(loginUserDto);
    }
    @Post('/')
    @UseGuards(AuthGuard())
    test(@Req() req){
        console.log(req);
    }
}
