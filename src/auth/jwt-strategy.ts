import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import { Injectable, UnauthorizedException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { Profile } from "src/profiles/profile.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'process.env.JWT_SECRET'
        });

    }

    async validate(payload: JwtPayload): Promise<Profile> {
        const { name } = payload;
        const user_found = this.userRepository.findOne({ name });

        if (!user_found) {
            throw new UnauthorizedException();
          }
      
        return user_found;
    }

}