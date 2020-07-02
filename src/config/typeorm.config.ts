import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.HOST_DB ||'localhost',
    port: 5432,
    username: process.env.USER ||'ammu',
    password: process.env.PASSWORD || process.env.PgPassword,
    database: process.env.DATABASE || 'matrimony',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};