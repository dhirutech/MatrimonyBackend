import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthService } from './auth.service';
import { AuthSigninDto } from './dto/auth.signin.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authSignupDto: AuthSignupDto): Promise<void> {
        console.log(authSignupDto);
        return this.authService.signUp(authSignupDto);
    }

    @Post('/signin')
    signIn(@Body() authSigninDto: AuthSigninDto): Promise<{ accessToken: string }> {
        // console.log(process.env.JWT_SECRET);
        return this.authService.signIn(authSigninDto);

    }

}
