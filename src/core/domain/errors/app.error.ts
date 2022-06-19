export class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();

    this.message = message;
    this.statusCode = statusCode;
  }
}
