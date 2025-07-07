export class TodoCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
  ) {}
}
