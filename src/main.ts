import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService);
  const secret = config.get('SESSION_SECRET');
  app.use(
    session({
      secret,
      resave: false,
      saveUninitialized: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cats Service')
    .setDescription('Your go to service for finding and collecting cats')
    .setVersion('1.0')
    .addTag('cats')
    .addTag('favourites')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
