import { genre_type } from '@modules/user/domain/User';
import { UserNotFound } from '@modules/user/errors';
import { MemoryUserRepository } from '@modules/user/repositories';

import { UpdateUser } from '.';

describe('User', () => {
  let updateUser: UpdateUser;
  let usersRepository: MemoryUserRepository;

  describe('UpdateUser', () => {
    beforeEach(() => {
      usersRepository = new MemoryUserRepository();
      updateUser = new UpdateUser(usersRepository);
    });

    it('should be able to update an user', async () => {
      const data = {
        birth_date: new Date(),
        city_id: 'nonexistent',
        genre: genre_type.MALE,
        name: 'John Doe',
      };

      const user = await usersRepository.create(data);

      const newData = {
        id: user.id,
        name: 'New John Doe',
      };

      await updateUser.execute(newData);

      const updatedUser = await usersRepository.findById(user.id);

      expect(user.id).toEqual(updatedUser.id);
      expect(data.name).not.toEqual(updatedUser.name);
    });

    it('should not be able to update a nonexistent user', async () => {
      await expect(
        updateUser.execute({
          id: 'nonexistent',
          name: 'New John Doe',
        }),
      ).rejects.toEqual(new UserNotFound());
    });
  });
});
