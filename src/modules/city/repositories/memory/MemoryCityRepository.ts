import { CreateCityDTO } from '@modules/city/dtos';
import { City } from '@modules/city/entities';

import { ICityRepository } from '../ICityRepository';

class MemoryCityRepository implements ICityRepository {
  private cities: City[] = [];

  async create(data: CreateCityDTO): Promise<City> {
    const city = City.create(data);

    this.cities.push(city);

    return city;
  }

  async findById(id: string): Promise<City> {
    return this.cities.find(city => city.id === id);
  }

  async findByName(name: string): Promise<City> {
    return this.cities.find(
      city => city.name.toLowerCase() === name.toLowerCase(),
    );
  }

  async list(): Promise<City[]> {
    return this.cities;
  }

  async listByName(name: string): Promise<City[]> {
    return this.cities.filter(
      city => city.name.toLowerCase() === name.toLowerCase(),
    );
  }

  async listByState(state: string): Promise<City[]> {
    return this.cities.filter(
      city => city.state.toLowerCase() === state.toLowerCase(),
    );
  }
}

export { MemoryCityRepository };
