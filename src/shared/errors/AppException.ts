import { ERRORS } from '.';
import { HttpStatusCodes } from './HttpStatusCode';

class AppException {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly errorCode: ERRORS;

  constructor(
    message: string,
    errorCode = ERRORS.INTERNAL_SERVER_ERROR,
    statusCode = HttpStatusCodes.BAD_REQUEST,
  ) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

export { AppException };
