import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class GetProfilesFilterDto {

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name: string;
    
    @IsOptional()
    @IsNotEmpty()
    caste: string;
        
    @IsOptional()
    @IsNotEmpty()
    from_age: number;

    @IsOptional()
    @IsNotEmpty()
    to_age: number;

    @IsOptional()
    @IsNotEmpty()
    from_height: number;

    @IsOptional()
    @IsNotEmpty()
    to_height: number;
    
    @IsOptional()
    @IsNotEmpty()
    from_weight: number;
    
    @IsOptional()
    @IsNotEmpty()
    to_weight: number;

}