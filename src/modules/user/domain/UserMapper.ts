import { User as PersistenceUsers, Genre } from '@prisma/client';

import { User } from '.';
import { genre_type } from './User';

type PersistenceProps = {
  id: string;
  name: string;
  genre: Genre;
  birth_date: Date;
  city_id: string;
};

interface IRenderProps extends User {
  age: number;
}

class UserMapper {
  static toDomain(data: PersistenceUsers): User {
    return User.create({
      ...data,
      genre: genre_type[data.genre],
    });
  }

  static toRender(data: PersistenceUsers): IRenderProps {
    return {
      ...UserMapper.toDomain(data),
      age: new Date().getFullYear() - data.birth_date.getFullYear(),
    };
  }

  static toPersistence(user: User): PersistenceProps {
    return {
      id: user.id,
      birth_date: user.birth_date,
      city_id: user.city_id,
      genre: Genre[user.genre],
      name: user.name,
    };
  }
}

export { UserMapper };
