import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class AuthSigninDto {

    @IsOptional()
    @IsNotEmpty()    
    id: number;

    @IsString()
    @IsOptional()
    @IsNotEmpty()    
    email: string;
    
    password: string;
}