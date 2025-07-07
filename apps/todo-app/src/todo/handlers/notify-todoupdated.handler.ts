import { NotifyTodoCreatedCommand } from '@app/shared';
import { NotifyTodoUpdatedCommand } from '@app/shared/commands/notify-todoupdated.command';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotifyTodoCreatedCommand)
export class NotifyTodoUpdatedHandler {
  async execute(command: NotifyTodoUpdatedCommand): Promise<void> {
    console.log(`Notification: To-Do Updated - ${command.title}`);
  }
}
