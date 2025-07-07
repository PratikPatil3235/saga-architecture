import { CommandHandler, EventBus } from '@nestjs/cqrs';

import { CreateTodoCommand, TodoCreatedEvent } from '@app/shared';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../entities/todo.entity';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
    private eventBus: EventBus,
  ) {}

  async execute(command: CreateTodoCommand): Promise<void> {
    const todo = new Todo();
    todo.title = command.title;
    todo.description = command.description;

    await this.repository.save(todo);

    return this.eventBus.publish(new TodoCreatedEvent(todo.id, todo.title));
  }
}
