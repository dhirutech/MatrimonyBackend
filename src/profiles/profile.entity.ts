import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, Unique, CreateDateColumn } from "typeorm";

@Entity()
@Unique(['email'])
export class Profile extends BaseEntity {
    

    // For storing personal details

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    date_of_registration: Date;
    
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: false })
    password: string;
    
    @Column({ nullable: false })
    gender: string;

    @Column({ nullable: true })
    age: number;
    
    @Column({ nullable: true, type: 'date' })
    dob: string;

    @Column({ nullable: true })
    birth_time: string;
    
    @Column({ nullable: true })
    birth_place: string;
    
    @Column({ nullable: true })
    religion: string;
    
    @Column({ nullable: true })
    caste: string;
    
    @Column({ nullable: true })
    subcaste: string;
    
    @Column({ nullable: true })
    gothram: string;
    
    @Column({ nullable: true })
    star: string;
    
    @Column({ nullable: true })
    qualification: string;
    
    @Column({ nullable: true })
    job: string;
    
    @Column({ nullable: true })
    workplace: string;
    
    @Column({ nullable: true })
    income: string;
    
    @Column({ type: "decimal", nullable: true })
    height: number;
    
    @Column({ type: "decimal", nullable: true })
    weight: number;
    
    @Column({ nullable: true })
    mother_tongue: string;
    
    @Column({ nullable: true })
    known_language: string;
    
    @Column({ nullable: true })
    nativity: string;
    
    @Column({ nullable: true })
    marital_status: string;
    
    @Column({ nullable: true })
    talents: string;
    
    @Column({ nullable: true })
    hobbies: string;
    
    @Column({ nullable: true })
    vehicle_driving: string;
    
    @Column({ nullable: true })
    disabilities: string;


    // Horoscope details

    // Rasi
    
    @Column({ nullable: true })
    rasibox11: string;
    
    @Column({ nullable: true })
    rasibox12: string;
    
    @Column({ nullable: true })
    rasibox13: string;
    
    @Column({ nullable: true })
    rasibox14: string;
    
    @Column({ nullable: true })
    rasibox15: string;
    
    @Column({ nullable: true })
    rasibox16: string;
    
    @Column({ nullable: true })
    rasibox17: string;
    
    @Column({ nullable: true })
    rasibox18: string;
    
    @Column({ nullable: true })
    rasibox19: string;
    
    @Column({ nullable: true })
    rasibox110: string;
    
    @Column({ nullable: true })
    rasibox111: string;
    
    @Column({ nullable: true })
    rasibox112: string;
    
    // Navamsam
    
    @Column({ nullable: true })
    rasibox21: string;
    
    @Column({ nullable: true })
    rasibox22: string;
    
    @Column({ nullable: true })
    rasibox23: string;
    
    @Column({ nullable: true })
    rasibox24: string;
    
    @Column({ nullable: true })
    rasibox25: string;
    
    @Column({ nullable: true })
    rasibox26: string;
    
    @Column({ nullable: true })
    rasibox27: string;
    
    @Column({ nullable: true })
    rasibox28: string;
    
    @Column({ nullable: true })
    rasibox29: string;
    
    @Column({ nullable: true })
    rasibox210: string;
    
    @Column({ nullable: true })
    rasibox211: string;
    
    @Column({ nullable: true })
    rasibox212: string;



    // For storing family details

    @Column({ nullable: true })
    father_name: string;
    
    @Column({ nullable: true })
    father_occupation: string;
    
    @Column({ nullable: true })
    mother_name: string;
    
    @Column({ nullable: true })
    mother_occupation: string;
    
    @Column({ nullable: false })
    contact_main: number;
    
    @Column({ nullable: true })
    contact_sup: number;
    
    @Column({ nullable: true })
    sibiling_count: number;
    
    @Column({ nullable: true })
    family_status: string;
    
    @Column({ nullable: true })
    properties: string;
    
    @Column({ nullable: true })
    other_details: string;


    // Partner Expectations

    @Column({ nullable: true })
    expected_qualification: string;
    
    @Column({ nullable: true })
    expected_place: string;
    
    @Column({ nullable: true })
    expected_income: string;
    
    @Column({ nullable: true })
    expected_caste: string;
    
    @Column({ nullable: true })
    expected_subcaste: string;
    
    @Column({ nullable: true })
    expected_marital_status: string;
    
    @Column({ nullable: true })
    age_difference: string;
    
    @Column({ type: "decimal", nullable: true })
    expected_height: number;
    
    @Column({ type: "decimal", nullable: true })
    expected_weight: number;
    
    @Column({ nullable: true })
    expectations: string;
}