import { GetTodoByIdQuery } from '@app/shared/queries/get-todo-byId.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetTodoByIdQuery)
export class GetTodoByIdHandler implements IQueryHandler<GetTodoByIdQuery> {
  constructor(
    @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
  ) {}

  async execute(query: GetTodoByIdQuery) {
    const todo = await this.todoRepo.findOne({ where: { id: query.id } });
    if (!todo) {
      throw new NotFoundException('Todo not found...');
    }
    return todo;
  }
}
