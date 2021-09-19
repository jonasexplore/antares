import { genre_type } from '@modules/user/domain/User';
import { UserNotFound } from '@modules/user/errors';
import { MemoryUserRepository } from '@modules/user/repositories';

import { DeleteUser } from '.';

describe('User', () => {
  let deleteUser: DeleteUser;
  let usersRepository: MemoryUserRepository;

  describe('DeleteUser', () => {
    beforeEach(() => {
      usersRepository = new MemoryUserRepository();
      deleteUser = new DeleteUser(usersRepository);
    });

    it('should be able to delete an user', async () => {
      const data = {
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe',
      };

      const user = await usersRepository.create(data);

      await deleteUser.execute(user.id);

      expect(await usersRepository.findById(user.id)).toBeUndefined();
    });

    it('should not be able to delete nonexistent user', async () => {
      await expect(deleteUser.execute('nonexistent')).rejects.toEqual(
        new UserNotFound(),
      );
    });
  });
});
