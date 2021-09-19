import { CreateCityDTO } from '../dtos';
import { City } from '../entities';

interface ICityRepository {
  create(data: CreateCityDTO): Promise<City>;
  findById(id: string): Promise<City>;
  findByName(name: string): Promise<City>;
  list(): Promise<City[]>;
  listByName(name: string): Promise<City[]>;
  listByState(state: string): Promise<City[]>;
}

export { ICityRepository };
