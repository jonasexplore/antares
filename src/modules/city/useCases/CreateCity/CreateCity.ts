import { inject, injectable } from 'tsyringe';

import { CreateCityDTO } from '@modules/city/dtos';
import { City } from '@modules/city/entities';
import { CityAlreadyExists } from '@modules/city/errors';
import { CITY, ICityRepository } from '@modules/city/repositories';

@injectable()
class CreateCity {
  constructor(
    @inject(CITY.CITY_REPOSITORY)
    private readonly citiesRepository: ICityRepository,
  ) {}

  async execute({ name, state }: CreateCityDTO): Promise<City> {
    const cityAlreadyExists = await this.citiesRepository.findByName(name);

    if (cityAlreadyExists) {
      throw new CityAlreadyExists();
    }

    return this.citiesRepository.create({
      name,
      state,
    });
  }
}

export { CreateCity };
