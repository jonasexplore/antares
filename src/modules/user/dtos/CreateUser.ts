import { genre_type } from '../domain/User';

type CreateUserDTO = {
  id?: string;
  name: string;
  genre: genre_type;
  birth_date: Date;
  city_id: string;
};

export { CreateUserDTO };
