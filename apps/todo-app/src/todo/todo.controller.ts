import { GetTodoByIdQuery } from './../../../../libs/shared/src/queries/get-todo-byId.query';
import {
  CreateTodoCommand,
  CreateTodoDto,
  DeleteTodoCommand,
  GetTodosQuery,
  UpdateToDoCommand,
  UpdateTodoDto,
} from '@app/shared';
import { Body, Controller, HttpStatus, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';

@Controller('todo')
export class ToDoController {
  constructor(
    private readonly commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

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

  @MessagePattern({ cmd: 'get-todos' })
  async handleGetTodos() {
    return await this.queryBus.execute(new GetTodosQuery());
  }

  @MessagePattern({ cmd: 'get-todo-byid' })
  async handleGetTodoById(id: string) {
    return await this.queryBus.execute(new GetTodoByIdQuery(id));
  }

  @MessagePattern({ cmd: 'delete-todo' })
  async handleDeleteTodo(id: string) {
    return await this.commandBus.execute(new DeleteTodoCommand(id));
  }
}
