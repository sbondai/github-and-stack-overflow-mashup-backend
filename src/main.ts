import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Only for development; for production, configure allowed origins.
  const port = process.env.PORT || 4000;
  await app.listen(port);
}
bootstrap();
