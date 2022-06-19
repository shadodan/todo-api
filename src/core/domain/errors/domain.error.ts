export class DomainError extends Error {
  constructor(public readonly message: string) {
    super();
  }
}
