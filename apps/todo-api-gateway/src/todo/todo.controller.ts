import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MICOSERVICE_CLIENT } from '../app.constrants';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTodoDto, UpdateTodoDto } from '@app/shared';

@Controller('todo')
export class TodoController {
  constructor(
    @Inject(MICOSERVICE_CLIENT.TODO_SERVICE)
    private readonly todoClient: ClientProxy,
  ) {}

  @Post()
  async createToDo(@Body() dto: CreateTodoDto) {
    return this.todoClient.send({ cmd: 'create-todo' }, dto);
  }
  @Patch()
  async updateToDo(@Body() dto: UpdateTodoDto) {
    return this.todoClient.send({ cmd: 'update-todo' }, dto);
  }

  @Get()
  getToDos() {
    return this.todoClient.send({ cmd: 'get-todos' }, {});
  }
}
