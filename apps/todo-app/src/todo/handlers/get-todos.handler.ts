import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { Repository } from 'typeorm';
import { GetTodosQuery } from '@app/shared';

@QueryHandler(GetTodosQuery)
export class GetTodosHandler implements IQueryHandler<GetTodosQuery> {
  constructor(
    @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
  ) {}

  async execute(query: GetTodosQuery) {
    return await this.todoRepo.find();
  }
}
