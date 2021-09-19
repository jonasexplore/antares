import { BaseEntity } from '@core/domain/BaseEntity';
import { City } from '@modules/city/entities';

import { CreateUserDTO } from '../dtos/CreateUser';

enum genre_type {
  MALE = 'male',
  FEMALE = 'female',
}

class User extends BaseEntity {
  name: string;
  genre: genre_type;
  birth_date: Date;
  city_id: string;
  city: City;

  public static create = (data: CreateUserDTO): User =>
    Object.assign(new User(), data);
}

export { User, genre_type };
