import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTodoHandler } from './handlers/create-todo.handler';
import { NotifyTodoCreatedHandler } from './handlers/notify-todo.handler';
import { TodoSaga } from '../sagas/todo.saga';
import { ToDoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { UpdateTodoHandler } from './handlers/update-to.handler';
import { GetTodosHandler } from './handlers/get-todos.handler';
import { GetTodoByIdHandler } from './handlers/get-todoiById.handler';
import { DeleteTodoHandler } from './handlers/delete-todo.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), CqrsModule],
  controllers: [ToDoController],
  providers: [
    CreateTodoHandler,
    NotifyTodoCreatedHandler,
    TodoSaga,
    UpdateTodoHandler,
    GetTodosHandler,
    GetTodoByIdHandler,
    DeleteTodoHandler,
  ],
  exports: [],
})
export class TodoModule {}
