import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signup')
    signUp(@Body() authSignupDto: AuthSignupDto): Promise<void> {
        console.log(authSignupDto);
        return this.authService.signUp(authSignupDto);
    }
}
