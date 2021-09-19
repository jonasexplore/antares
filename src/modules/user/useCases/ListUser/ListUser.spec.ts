import { genre_type } from '@modules/user/domain/User';
import { MemoryUserRepository } from '@modules/user/repositories';

import { ListUser } from '.';

describe('User', () => {
  let listUser: ListUser;
  let usersRepository: MemoryUserRepository;

  describe('ListUser', () => {
    beforeEach(() => {
      usersRepository = new MemoryUserRepository();
      listUser = new ListUser(usersRepository);
    });

    it('should be able to list users', async () => {
      const data = {
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe',
      };

      await usersRepository.create(data);

      const users = await listUser.execute({});

      expect(users.length > 0).toBeTruthy();
      expect(users[0].name).toEqual(data.name);
    });

    it('should be able to list users by name', async () => {
      await usersRepository.create({
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe',
      });

      await usersRepository.create({
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe 2',
      });

      const users = await listUser.execute({ name: 'John Doe 2' });

      expect(users.length).toBe(1);
      expect(users[0].name).toEqual('John Doe 2');
    });
  });
});
