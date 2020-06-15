import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProfilesService } from './profiles/profiles.service';
import { ProfilesController } from './profiles/profiles.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProfilesModule,
    AuthModule
  ]
})
export class AppModule {}
