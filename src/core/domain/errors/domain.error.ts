export class DomainError extends Error {
  public readonly message: string;

  constructor() {
    super();
  }
}
