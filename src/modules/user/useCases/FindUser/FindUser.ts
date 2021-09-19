import { User } from '@modules/user/entities';
import { UserNotFound } from '@modules/user/errors';
import { IUserRepository } from '@modules/user/repositories';

class FindUser {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

export { FindUser };
