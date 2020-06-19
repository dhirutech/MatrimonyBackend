import { EntityRepository, Repository } from "typeorm";
import { AuthSignupDto } from "./dto/auth.signup.dto";
import { Profile } from "src/profiles/profile.entity";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { AuthSigninDto } from "./dto/auth.signin.dto";


@EntityRepository(Profile)
export class UserRepository extends Repository<Profile> {

    async signUp(authSignupDto: AuthSignupDto): Promise<void> {
        const profile = new Profile();
        console.log(authSignupDto, 'in repository');
        const { name, email, password, gender, age, dob, birth_time, birth_place, religion, caste, subcaste, gothram, star, qualification, job, workplace, income, height, weight, mother_tongue, known_language, nativity, marital_status, talents, hobbies, vehicle_driving, disabilities, rasibox11, rasibox12, rasibox13, rasibox14, rasibox15, rasibox16, rasibox17, rasibox18, rasibox19, rasibox110, rasibox111, rasibox112, rasibox21, rasibox22, rasibox23, rasibox24, rasibox25, rasibox26, rasibox27, rasibox28, rasibox29, rasibox210, rasibox211, rasibox212, father_name, father_occupation, mother_name, mother_occupation, contact_main, contact_sup, sibiling_count, family_status, properties, other_details, expected_qualification, expected_place, expected_income, expected_caste, expected_subcaste, expected_marital_status, age_difference, expected_height, expected_weight, expectations } = authSignupDto;

        profile.name = name,
        profile.email = email,
        profile.password = password,
        profile.gender = gender,
        profile.age = age,
        profile.dob = dob,
        profile.birth_time = birth_time,
        profile.birth_place = birth_place,
        profile.religion = religion,
        profile.caste = caste,
        profile.subcaste = subcaste,
        profile.gothram = gothram,
        profile.star = star,
        profile.qualification = qualification,
        profile.job = job,
        profile.workplace = workplace,
        profile.income = income,
        profile.height = height,
        profile.weight = weight,
        profile.mother_tongue = mother_tongue,
        profile.known_language = known_language,
        profile.nativity = nativity,
        profile.marital_status = marital_status,
        profile.talents = talents,
        profile.hobbies = hobbies,
        profile.vehicle_driving = vehicle_driving,
        profile.disabilities = disabilities,
        profile.rasibox11 = rasibox11,
        profile.rasibox12 = rasibox12,
        profile.rasibox13 = rasibox13,
        profile.rasibox14 = rasibox14,
        profile.rasibox15 = rasibox15,
        profile.rasibox16 = rasibox16,
        profile.rasibox17 = rasibox17,
        profile.rasibox18 = rasibox18,
        profile.rasibox19 = rasibox19,
        profile.rasibox110 = rasibox110,
        profile.rasibox111 = rasibox111,
        profile.rasibox112 = rasibox112,
        profile.rasibox21 = rasibox21,
        profile.rasibox22 = rasibox22,
        profile.rasibox23 = rasibox23,
        profile.rasibox24 = rasibox24,
        profile.rasibox25 = rasibox25,
        profile.rasibox26 = rasibox26,
        profile.rasibox27 = rasibox27,
        profile.rasibox28 = rasibox28,
        profile.rasibox29 = rasibox29,
        profile.rasibox210 = rasibox210,
        profile.rasibox211 = rasibox211,
        profile.rasibox212 = rasibox212,
        profile.father_name = father_name,
        profile.father_occupation = father_occupation,
        profile.mother_name = mother_name,
        profile.mother_occupation = mother_occupation,
        profile.contact_main = contact_main,
        profile.contact_sup = contact_sup,
        profile.sibiling_count = sibiling_count,
        profile.family_status = family_status,
        profile.properties = properties,
        profile.other_details = other_details,
        profile.expected_qualification = expected_qualification,
        profile.expected_place = expected_place,
        profile.expected_income = expected_income,
        profile.expected_caste = expected_caste,
        profile.expected_subcaste = expected_subcaste,
        profile.expected_marital_status = expected_marital_status,
        profile.age_difference = age_difference,
        profile.expected_height = expected_height,
        profile.expected_weight = expected_weight,
        profile.expectations = expectations

        try {
            await profile.save()
        } catch (error) {
            if(error.code == '23505') {    
                const email_exist = await this.findOne({ email });
                if(email_exist) {
                    throw new ConflictException('Email already exists');
                }
            } 
            else {
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(authSigninDto: AuthSigninDto): Promise<string> {
        const { id, email, password } = authSigninDto;

        const user_id = await this.findOne({ id });
        const user_email = await this.findOne({ email });
        // const user_mobile = await this.findOne({ contact_main });

        if (user_id || user_email) {
            if(user_id && user_id.password === password) { return user_id.name; }
            if(user_email && user_email.password === password) { return user_email.name; }
        } else { 
            return null; 
        }
    }
}