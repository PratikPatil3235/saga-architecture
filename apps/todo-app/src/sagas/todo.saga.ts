import { NotifyTodoUpdatedCommand } from '@app/shared/commands/notify-todoupdated.command';
import {
  NotifyTodoCreatedCommand,
  TodoCreatedEvent,
  TodoUpdatedEvent,
} from '@app/shared';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { delay, map, Observable } from 'rxjs';

@Injectable()
export class TodoSaga {
  @Saga()
  todoCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TodoCreatedEvent),
      delay(1000),
      map((event) => new NotifyTodoCreatedCommand(event.id, event.title)),
    );
  };

  todoUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TodoUpdatedEvent),
      delay(1000),
      map(
        (event) =>
          new NotifyTodoUpdatedCommand(
            event.id,
            event.title,
            event.description,
            event.isCompleted,
          ),
      ),
    );
  };
}
