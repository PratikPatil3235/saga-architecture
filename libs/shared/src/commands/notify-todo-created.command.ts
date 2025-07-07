export class NotifyTodoCreatedCommand {
  constructor(
    public readonly id: string,
    public readonly title: string,
  ) {}
}
