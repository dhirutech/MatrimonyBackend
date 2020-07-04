import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ bodyLimit: 10048576 }),
  )
  app.enableCors();
<<<<<<< HEAD
  await app.listen(+process.env.PORT || 3000);
=======
  await app.listen(3000);
>>>>>>> 7d7cd6adabb596b1aea0eb578d06f2caa447381f
}
bootstrap();
