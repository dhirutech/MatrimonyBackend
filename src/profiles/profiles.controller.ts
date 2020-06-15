import { Controller, Get, Param, Query, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { GetProfilesFilterDto } from './dto/get-profiles-filter.dto';
import { Profile } from './profile.entity';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }

    // @Get()
    // getProfiles(@Query(ValidationPipe) filterDto: GetProfilesFilterDto): Profile[] {
    //     if(Object.keys(filterDto).length) {
    //         return this.profilesService.getProfilesWithFilters(filterDto);
    //     } 
    //     else {
    //         return this.profilesService.getAllProfiles();
    //     }
    // }

    @Get('/:id')
    getProfileById(@Param('id', ParseIntPipe) id: number ): Promise<Profile> {
        return this.profilesService.getProfileById(id)
    }

}
