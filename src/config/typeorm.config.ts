import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 4321,
    username: 'ammu',
    password: process.env.PgPassword,
    database: 'matrimony',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true
};