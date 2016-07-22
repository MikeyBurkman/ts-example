
export class NotFoundError extends Error {
  constructor() {
    super('Not Found');
  }
  readonly status: number = 404;
}
