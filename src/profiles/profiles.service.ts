import { Injectable, NotFoundException } from '@nestjs/common';
import { GetProfilesFilterDto } from './dto/get-profiles-filter.dto';
import { ProfileRepository } from './profile.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(ProfileRepository)
        private profileRepository: ProfileRepository
    ) {}

    // getAllProfiles(): Profile[] {
    //     return this.profiles;
    // }

    // getProfilesWithFilters(filterDto: GetProfilesFilterDto): Profile[] {
    //     const { age, caste, height, weight } = filterDto;
    //     let profiles = this.getAllProfiles();

    //     if(age) {
    //         profiles = profiles.filter(profile => profile.age === age);
    //     }
    //     if(caste) {
    //         profiles = profiles.filter(profile => profile.caste === caste);
    //     }
    //     if(height) {
    //         profiles = profiles.filter(profile => profile.height === height);
    //     }
    //     if(weight) {
    //         profiles = profiles.filter(profile => profile.weight === weight);
    //     }
    //     console.log(profiles,'\n',filterDto);
    //     return profiles;
    // }

    async getProfileById(id: number): Promise<Profile> {
        const found = await this.profileRepository.findOne(id);
        if(!found) {
            throw new NotFoundException(`Profile with ID '${id}' not found`);
        }

        return found;
    }
    // getProfileById(id: string): Profile {
    //     const found = this.profiles.find(profile => profile.id === id);

    //     if(!found) {
    //         throw new NotFoundException(`Profile with ID '${id}' not found`);
    //     }

    //     return found;
    // }
}
