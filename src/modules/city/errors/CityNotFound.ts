import { AppException, ERRORS } from '@shared/errors';
import { HttpStatusCodes } from '@shared/errors/HttpStatusCode';

class CityNotFound extends AppException {
  constructor() {
    super('City not found', ERRORS.CITY_NOT_FOUND, HttpStatusCodes.NOT_FOUND);
  }
}

export { CityNotFound };
