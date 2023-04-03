import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService);
  const secret = config.get('SESSION_SECRET');
  // app.setGlobalPrefix('api');
  app.use(
    session({
      secret,
      resave: false,
      saveUninitialized: true,
    }),
  );
  await app.listen(8080);
}
bootstrap();
