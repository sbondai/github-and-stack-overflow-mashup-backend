import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Only for development; for production, configure allowed origins.
  await app.listen(4000);
}
bootstrap();
