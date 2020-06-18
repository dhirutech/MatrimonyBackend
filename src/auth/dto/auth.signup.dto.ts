import { IsString, MinLength, MaxLength, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class AuthSignupDto {

    // For storing personal details

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;
  
    @IsEmail()
    @IsOptional()
    email: string;
  
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;
      
    @IsNotEmpty()
    gender: string;
  
    age: number;
      
    dob: string;
  
    birth_time: string;
      
    birth_place: string;
      
    religion: string;
      
    caste: string;
      
    subcaste: string;
      
    gothram: string;
      
    star: string;
      
    qualification: string;
      
    job: string;
      
    workplace: string;
      
    income: string;
      
    height: number;
      
    weight: number;
      
    mother_tongue: string;
      
    known_language: string;
      
    nativity: string;
      
    marital_status: string;
      
    talents: string;
      
    hobbies: string;
      
    vehicle_driving: string;
      
    disabilities: string;


    // Horoscope details

    // Rasi
    
    rasibox11: string;
    
    rasibox12: string;
    
    rasibox13: string;
    
    rasibox14: string;
    
    rasibox15: string;
    
    rasibox16: string;
    
    rasibox17: string;
    
    rasibox18: string;
    
    rasibox19: string;
    
    rasibox110: string;
    
    rasibox111: string;
    
    rasibox112: string;
    
    // Navamsam
    
    rasibox21: string;
    
    rasibox22: string;
    
    rasibox23: string;
    
    rasibox24: string;
    
    rasibox25: string;
    
    rasibox26: string;
    
    rasibox27: string;
    
    rasibox28: string;
    
    rasibox29: string;
    
    rasibox210: string;
    
    rasibox211: string;
    
    rasibox212: string;



    // For storing family details
 
    father_name: string;
     
    father_occupation: string;
     
    mother_name: string;
     
    mother_occupation: string;
     
    @IsNotEmpty()
    contact_main: number;
    
    contact_sup: number;
     
    sibiling_count: number;
     
    family_status: string;
     
    properties: string;
     
    other_details: string;


    // Partner Expectations
 
    expected_qualification: string;
     
    expected_place: string;
     
    expected_income: string;
     
    expected_caste: string;
     
    expected_subcaste: string;
     
    expected_marital_status: string;
     
    age_difference: string;
     
    expected_height: number;
     
    expected_weight: number;
     
    expectations: string;
}