import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { IsOptional } from "class-validator";

@Entity()
export class Profile extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @IsOptional()
    name: string;
    
    @Column()
    @IsOptional()
    age: number;
    
    // @Column()
    // @IsOptional()
    // dob: string;

    // @Column()
    // @IsOptional()
    // birth_time: string;
    
    // @Column()
    // @IsOptional()
    // birth_place: string;
    
    // @Column()
    // @IsOptional()
    // religion: string;
    
    // @Column()
    // @IsOptional()
    // caste: string;
    
    // @Column()
    // @IsOptional()
    // subcaste: string;
    
    // @Column()
    // @IsOptional()
    // gothram: string;
    
    // @Column()
    // @IsOptional()
    // star: string;
    
    // @Column()
    // @IsOptional()
    // qualification: string;
    
    // @Column()
    // @IsOptional()
    // job: string;
    
    // @Column()
    // @IsOptional()
    // work_place: string;
    
    // @Column()
    // @IsOptional()
    // income: string;
    
    // @Column()
    // @IsOptional()
    // height: number;
    
    // @Column()
    // @IsOptional()
    // weight: number;
    
    // @Column()
    // @IsOptional()
    // mother_tongue: string;
    
    // @Column()
    // @IsOptional()
    // known_language: string;
    
    // @Column()
    // @IsOptional()
    // nativity: string;
    
    // @Column()
    // @IsOptional()
    // marital_status: string;
    
    // @Column()
    // @IsOptional()
    // talents: string;
    
    // @Column()
    // @IsOptional()
    // vehicle_driving: string;
    
    // @Column()
    // @IsOptional()
    // disabilities: string
}