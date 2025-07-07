import {
  CreateTodoCommand,
  CreateTodoDto,
  UpdateToDoCommand,
  UpdateTodoDto,
} from '@app/shared';
import { Body, Controller, HttpStatus } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';

@Controller('todo')
export class ToDoController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'create-todo' })
  async handleCreateTodo(@Body() data: CreateTodoDto) {
    const command = new CreateTodoCommand(data.title, data.description);
    this.commandBus.execute(command);
    return { status: HttpStatus.CREATED, data };
  }

  @MessagePattern({ cmd: 'update-todo' })
  async handleUpdateToDo(@Body() data: UpdateTodoDto) {
    const command = new UpdateToDoCommand(
      data.id,
      data.title,
      data.description,
      data.status,
    );
    await this.commandBus.execute(command);
    return { status: HttpStatus.OK, data };
  }
}
