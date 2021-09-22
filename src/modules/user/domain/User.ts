import { BaseEntity } from '@core/domain/BaseEntity';
import { City } from '@modules/city/domain';

enum genre_type {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

class User extends BaseEntity {
  name: string;
  genre: genre_type;
  birth_date: Date;
  city_id?: string;
  city?: City;

  public static create = (data: User): User => Object.assign(new User(), data);
}

export { User, genre_type };
