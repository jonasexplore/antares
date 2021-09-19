import { inject, injectable } from 'tsyringe';

import { ListCityDTO } from '@modules/city/dtos';
import { City } from '@modules/city/entities';
import { CITY, ICityRepository } from '@modules/city/repositories';

@injectable()
class ListCity {
  constructor(
    @inject(CITY.CITY_REPOSITORY)
    private readonly citiesRepository: ICityRepository,
  ) {}

  async execute({ name, state }: ListCityDTO): Promise<City[]> {
    if (name) {
      return this.citiesRepository.listByName(name);
    }

    if (state) {
      return this.citiesRepository.listByState(state);
    }

    return this.citiesRepository.list();
  }
}

export { ListCity };
