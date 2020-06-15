import { EntityRepository, Repository } from "typeorm";
import { AuthSignupDto } from "./dto/auth.signup.dto";
import { Profile } from "src/profiles/profile.entity";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { AuthSigninDto } from "./dto/auth.signin.dto";


@EntityRepository(Profile)
export class UserRepository extends Repository<Profile> {
    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        const profile = new Profile();
        profile.name = authSignupDto.name;
        profile.age = authSignupDto.age;
        profile.dob = authSignupDto.dob;
        profile.password = authSignupDto.password;
        profile.birth_time = authSignupDto.birth_time;

        try {
            await profile.save()
        } catch (error) {
            if(error.code == '23505') {
                throw new ConflictException('already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(authSigninDto: AuthSigninDto): Promise<string> {
        const { id, password } = authSigninDto;

        const user = await this.findOne({ id });
        if(user && user.password === password) {
            return user.name;
        } else {
            return null;
        }
    }
}