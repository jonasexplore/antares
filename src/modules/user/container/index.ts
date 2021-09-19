import { container } from 'tsyringe';

import { UsersRepository } from '@infra/repositories';

import { IUserRepository, USER } from '../repositories';

container.registerSingleton<IUserRepository>(
  USER.USER_REPOSITORY,
  UsersRepository,
);
