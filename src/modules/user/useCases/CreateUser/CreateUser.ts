import { CityNotFound } from '@modules/city/errors';
import { ICityRepository } from '@modules/city/repositories';
import { CreateUserDTO } from '@modules/user/dtos';
import { User } from '@modules/user/entities';
import { IUserRepository } from '@modules/user/repositories';

class CreateUser {
  constructor(
    private readonly usersRepository: IUserRepository,
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
