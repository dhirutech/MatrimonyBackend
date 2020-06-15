import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class AuthSignupDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    age: number;

    dob: string;

    password: string;

    birth_time: string;
}