import { genre_type } from '@modules/user/domain/User';
import { UserNotFound } from '@modules/user/errors';
import { MemoryUserRepository } from '@modules/user/repositories';

import { FindUser } from '.';

describe('User', () => {
  let findUser: FindUser;
  let usersRepository: MemoryUserRepository;

  describe('FindUser', () => {
    beforeEach(() => {
      usersRepository = new MemoryUserRepository();
      findUser = new FindUser(usersRepository);
    });

    it('should be able to find an user', async () => {
      const data = {
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe',
      };

      const { id: user_id } = await usersRepository.create(data);

      const user = await findUser.execute(user_id);

      expect(user.name).toEqual(data.name);
      expect(user.id).toEqual(user_id);
    });

    it('should not be able to find a nonexistent user', async () => {
      await expect(findUser.execute('nonexistent')).rejects.toEqual(
        new UserNotFound(),
      );
    });
  });
});
