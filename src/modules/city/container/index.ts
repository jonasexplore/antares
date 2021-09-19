import { container } from 'tsyringe';

import { CitiesRepository } from '@infra/repositories';

import { CITY, ICityRepository } from '../repositories';

container.registerSingleton<ICityRepository>(
  CITY.CITY_REPOSITORY,
  CitiesRepository,
);
