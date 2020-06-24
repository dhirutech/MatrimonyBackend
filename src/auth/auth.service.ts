import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthSigninDto } from './dto/auth.signin.dto';
import { JwtPayload } from './jwt-payload.interface';
import { ConfigService } from 'nestjs-dotenv';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        return this.userRepository.signUp(authSignupDto);
    }

    async signIn(authSignInDto: AuthSigninDto): Promise<{ accessToken:string }> {
        const name = await this.userRepository.signIn(authSignInDto);
        
        if(!name) {
            throw new UnauthorizedException('Invalid Credentials');
        }
        // console.log(this.configService.get('JWT_SECRET'), 'From service');
        const payload: JwtPayload = { name };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}
