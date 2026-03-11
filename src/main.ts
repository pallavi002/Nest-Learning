import { NestFactory } from '@nestjs/core';
// import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  // const app = await NestFactory.create(MessagesModule);
  const app = await NestFactory.create(ComputerModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
