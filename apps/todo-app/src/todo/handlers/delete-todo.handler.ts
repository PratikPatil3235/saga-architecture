import { InjectRepository } from '@nestjs/typeorm';
import { DeleteTodoCommand } from '@app/shared';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Todo } from '../../entities/todo.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(DeleteTodoCommand)
export class DeleteTodoHandler implements ICommandHandler<DeleteTodoCommand> {
  constructor(
    @InjectRepository(Todo) private readonly repo: Repository<Todo>,
  ) {}

  async execute(command: DeleteTodoCommand): Promise<any> {
    const result = await this.repo.delete(command.id);
    if (result.affected === 0) {
      throw new NotFoundException(`Todo Not Found...`);
    }
    return result;
  }
}
