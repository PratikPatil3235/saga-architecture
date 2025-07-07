import { NotifyTodoCreatedCommand } from '@app/shared';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotifyTodoCreatedCommand)
export class NotifyTodoCreatedHandler {
  async execute(command: NotifyTodoCreatedCommand): Promise<void> {
    console.log(`Notification: New To-Do Created - ${command.title}`);
  }
}
