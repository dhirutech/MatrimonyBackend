import { EntityRepository, Repository } from "typeorm";
import { AuthSignupDto } from "./dto/auth.signup.dto";
import { Profile } from "src/profiles/profile.entity";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { AuthSigninDto } from "./dto/auth.signin.dto";


@EntityRepository(Profile)
export class UserRepository extends Repository<Profile> {

    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        const profile = new Profile();

        const { email, contact_main } = authSignupDto;

        profile.name = authSignupDto.name;
        profile.email = authSignupDto.email;
        profile.password = authSignupDto.password;
        profile.contact_main = authSignupDto.contact_main;


        try {
            await profile.save()
        } catch (error) {
            if(error.code == '23505') {
                
                const email_exist = await this.findOne({ email });
                const contact_exist = await this.findOne({ contact_main });
                
                if(email_exist) {
                    throw new ConflictException('Email already exists');
                }
                if(contact_exist) {
                    throw new ConflictException('Contact number already exists');
                }
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