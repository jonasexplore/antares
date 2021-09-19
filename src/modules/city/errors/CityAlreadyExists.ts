import { AppException, ERRORS } from '@shared/errors';
import { HttpStatusCodes } from '@shared/errors/HttpStatusCode';

class CityAlreadyExists extends AppException {
  constructor() {
    super(
      'City name already exists',
      ERRORS.CITY_ALREADY_EXISTS,
      HttpStatusCodes.CONFLICT,
    );
  }
}

export { CityAlreadyExists };
