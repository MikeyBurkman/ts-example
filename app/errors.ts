
export class NotFoundError extends Error {
  constructor() {
    super('Not Found');
  }
  status: number = 404;
}
