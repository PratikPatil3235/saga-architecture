export class UpdateToDoCommand {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly status: boolean,
  ) {}
}
