import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthSigninDto } from './dto/auth.signin.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        return this.userRepository.signUp(authSignupDto);
    }

    async signIn(authSignInDto: AuthSigninDto): Promise<string> {
        const user = await this.userRepository.signIn(authSignInDto);
        
        if(!user) {
            throw new UnauthorizedException('Invalid Credentials');
        }
        return;
    }
}
