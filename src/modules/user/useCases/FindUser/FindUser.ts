import { inject, injectable } from 'tsyringe';

import { User } from '@modules/user/entities';
import { UserNotFound } from '@modules/user/errors';
import { IUserRepository, USER } from '@modules/user/repositories';

@injectable()
class FindUser {
  constructor(
    @inject(USER.USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

export { FindUser };
