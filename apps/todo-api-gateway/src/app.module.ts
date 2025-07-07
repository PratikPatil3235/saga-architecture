import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICOSERVICE_CLIENT } from './app.constrants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICOSERVICE_CLIENT.TODO_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [],
})
export class AppModule {}
