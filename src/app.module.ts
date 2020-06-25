import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-dotenv';
import { ProfilesModule } from './profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProfilesModule,
    AuthModule,
    ConfigModule.forRoot('src/.env')
  ]
})
export class AppModule {}
