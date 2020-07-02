import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.HOST_DB || 'ec2-52-202-146-43.compute-1.amazonaws.com' || 'localhost',
    port: 5432,
    username: process.env.USER || 'idoxalzeuzrlpm' || 'ammu',
    password: process.env.PASSWORD || process.env.HerokuPgPassword || process.env.PgPassword,
    database: process.env.DATABASE || 'd4np9ivt8b79hd' || 'matrimony',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};