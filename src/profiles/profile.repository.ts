import { Repository, EntityRepository } from "typeorm";
import { Profile } from "./profile.entity";
import { GetProfilesFilterDto } from "./dto/get-profiles-filter.dto";

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
    
    async getProfiles(filterDto: GetProfilesFilterDto): Promise<Profile[]> {
        const { id, name, gender, from_age, to_age, caste, from_height, to_height, from_weight, to_weight } = filterDto;

        const query = this.createQueryBuilder('profile');

        
        if(id) {
            query.andWhere('profile.id = :id', { id });
        }

        if(name) {
            query.andWhere('profile.name LIKE :name', { name: `%${name}%` });
        }

        if(caste) {
            query.andWhere('profile.caste = :caste', { caste });
        }

        if(gender) {
            query.andWhere('profile.gender = :gender', { gender });
        }

        if(from_age && to_age) {
            query.andWhere('profile.age >= :from_age AND profile.age <= :to_age', { from_age, to_age });
        }

        if(from_height && to_height) {
            query.andWhere('profile.height >= :from_height AND profile.height <= :to_height', { from_height, to_height });
        }

        if(from_weight && to_weight) {
            query.andWhere('profile.weight >= :from_weight AND profile.weight <= :to_weight', { from_weight, to_weight });
        }

        const profiles = await query.getMany();
        return profiles;
    }
}