import { AppException, ERRORS } from '@shared/errors';
import { HttpStatusCodes } from '@shared/errors/HttpStatusCode';

class UserNotFound extends AppException {
  constructor() {
    super('User not found', ERRORS.USER_NOT_FOUND, HttpStatusCodes.NOT_FOUND);
  }
}

export { UserNotFound };
