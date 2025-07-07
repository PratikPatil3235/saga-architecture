import { NestFactory } from '@nestjs/core';
import { TodoAppModule } from './todo-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TodoAppModule,{
    transport:Transport.TCP,
    options:{
      port:3001
    }
  });
  await app.listen();
  console.log("todo app running on port 3001")
}
bootstrap();
