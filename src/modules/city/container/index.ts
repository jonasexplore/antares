import { container } from 'tsyringe';

import { CITY, ICityRepository, MemoryCityRepository } from '../repositories';

container.registerSingleton<ICityRepository>(
  CITY.CITY_REPOSITORY,
  MemoryCityRepository,
);
