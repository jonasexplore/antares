import { inject, injectable } from 'tsyringe';

import { CityNotFound } from '@modules/city/errors';
import { CITY, ICityRepository } from '@modules/city/repositories';
import { User } from '@modules/user/domain';
import { CreateUserDTO } from '@modules/user/dtos';
import { IUserRepository, USER } from '@modules/user/repositories';

@injectable()
class CreateUser {
  constructor(
    @inject(USER.USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,

    @inject(CITY.CITY_REPOSITORY)
    private readonly citiesRepository: ICityRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const cityExists = await this.citiesRepository.findById(data.city_id);

    if (!cityExists) {
      throw new CityNotFound();
    }

    return this.usersRepository.create(data);
  }
}

export { CreateUser };
