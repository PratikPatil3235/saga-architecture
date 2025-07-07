import { EventBus } from '@nestjs/cqrs';
import { TodoUpdatedEvent, UpdateToDoCommand } from '@app/shared';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(UpdateToDoCommand)
export class UpdateTodoHandler implements ICommandHandler<UpdateToDoCommand> {
  constructor(
    @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
    private eventBus: EventBus,
  ) {}

  async execute(command: UpdateToDoCommand) {
    const todo = await this.todoRepo.findOne({ where: { id: command.id } });
    if (!todo) {
      throw new NotFoundException(`ToDo Not found...`);
    }
    todo.description = command.description;
    todo.title = command.title;
    todo.description = command.description;
    todo.isCompleted = command.status;

    await this.todoRepo.save(todo);
    this.eventBus.publish(
      new TodoUpdatedEvent(
        todo.id,
        todo.title,
        todo.description,
        todo.isCompleted,
      ),
    );
  }
}
