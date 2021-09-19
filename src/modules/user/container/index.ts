import { container } from 'tsyringe';

import { IUserRepository, MemoryUserRepository, USER } from '../repositories';

container.registerSingleton<IUserRepository>(
  USER.USER_REPOSITORY,
  MemoryUserRepository,
);
