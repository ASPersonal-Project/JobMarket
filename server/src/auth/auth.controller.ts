import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}

    @Post('/signup')
    signUp(@Body() registerUserDto:RegisterUserDto){
        return this.authService.signUp(registerUserDto);
    }
}
