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

    async getProfiles(filterDto: GetProfilesFilterDto): Promise<Profile[]> {
        return this.profileRepository.getProfiles(filterDto);
    }

    async getProfileById(id: number): Promise<Profile> {
        const found = await this.profileRepository.findOne(id);
        if(!found) {
            throw new NotFoundException(`Profile with ID '${id}' not found`);
        }

        return found;
    }

}
