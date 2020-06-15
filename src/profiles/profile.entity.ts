import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Profile extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    dob: string;
    
    @Column()
    age: number;
    
    @Column()
    birth_time: string;
    
    @Column()
    birth_place: string;
    
    @Column()
    religion: string;
    
    @Column()
    caste: string;
    
    @Column()
    subcaste: string;
    
    @Column()
    gothram: string;
    
    @Column()
    star: string;
    
    @Column()
    qualification: string;
    
    @Column()
    job: string;
    
    @Column()
    work_place: string;
    
    @Column()
    income: string;
    
    @Column()
    height: number;
    
    @Column()
    weight: number;
    
    @Column()
    mother_tongue: string;
    
    @Column()
    known_language: string;
    
    @Column()
    nativity: string;
    
    @Column()
    marital_status: string;
    
    @Column()
    talents: string;
    
    @Column()
    vehicle_driving: string;
    
    @Column()
    disabilities: string
}