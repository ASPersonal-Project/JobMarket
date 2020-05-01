import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authservice : AuthService,
    ) { } 
    
    @Post('/signup')
    signUp(@Body() registerUserDto:RegisterUserDto) {
        return this.authservice.signUp(registerUserDto);
    }
}
