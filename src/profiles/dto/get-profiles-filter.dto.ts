import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetProfilesFilterDto {

    @IsOptional()
    @IsNotEmpty()
    age: number;

    @IsOptional()
    @IsNotEmpty()
    caste: string;
    
    @IsOptional()
    @IsNotEmpty()
    height: number;
    
    @IsOptional()
    @IsNotEmpty()
    weight: number;

}