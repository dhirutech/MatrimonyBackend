import { IsString, MinLength, MaxLength } from 'class-validator';

export class AuthSignupDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    age: number;

    dob: string;
}