export class TodoCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
  ) {}
}

export class TodoUpdatedEvent{
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description:string,
    public readonly isCompleted:boolean,
  ) {}
}