import { validate } from 'uuid';

import { CityNotFound } from '@modules/city/errors';
import { MemoryCityRepository } from '@modules/city/repositories';
import { genre_type } from '@modules/user/domain/User';
import { MemoryUserRepository } from '@modules/user/repositories';

import { CreateUser } from '.';

describe('User', () => {
  let createUser: CreateUser;
  let usersRepository: MemoryUserRepository;
  let citiesRepository: MemoryCityRepository;

  describe('CreateUser', () => {
    beforeEach(() => {
      usersRepository = new MemoryUserRepository();
      citiesRepository = new MemoryCityRepository();
      createUser = new CreateUser(usersRepository, citiesRepository);
    });

    it('Should be able to create a new user', async () => {
      const city = await citiesRepository.create({
        name: 'Barbalha',
        state: 'CE',
      });

      const data = {
        birth_date: new Date(),
        city_id: city.id,
        genre: genre_type.MALE,
        name: 'John Doe',
      };

      const user = await createUser.execute(data);

      expect(user).toHaveProperty('id');
      expect(validate(user.id)).toBeTruthy();
      expect(user.name).toEqual(data.name);
    });

    it('should not be able to create an user with nonexistent city', async () => {
      const data = {
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe',
      };

      await expect(createUser.execute(data)).rejects.toEqual(
        new CityNotFound(),
      );
    });
  });
});
