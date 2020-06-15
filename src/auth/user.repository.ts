import { EntityRepository, Repository } from "typeorm";
import { AuthSignupDto } from "./dto/auth.signup.dto";
import { Profile } from "src/profiles/profile.entity";


@EntityRepository(Profile)
export class UserRepository extends Repository<Profile> {
    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        const profile = new Profile();
        profile.name = authSignupDto.name;
        profile.age = authSignupDto.age;
        // profile.dob = authSignupDto.dob;
        await profile.save()
    }
}