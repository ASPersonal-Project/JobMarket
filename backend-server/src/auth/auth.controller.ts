import { Controller, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authservice : AuthService,
    ) { } 
    
    signUp(@Body() registerUserDto:RegisterUserDto) {
        return
    }
}
