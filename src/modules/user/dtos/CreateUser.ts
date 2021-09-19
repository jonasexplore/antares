import { genre_type } from '../entities/User';

type CreateUserDTO = {
  name: string;
  genre: genre_type;
  birth_date: Date;
  city_id: string;
};

export { CreateUserDTO };
