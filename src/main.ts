import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS
  // increase payload limit
  app.use(bodyParser.json({ limit: '50mb' })); // adjust limit as needed

  await app.listen(4000);
}
bootstrap();

