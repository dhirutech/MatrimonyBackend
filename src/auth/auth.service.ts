import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthSignupDto } from './dto/auth.signup.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        return this.userRepository.signUp(authSignupDto);
    }
}
