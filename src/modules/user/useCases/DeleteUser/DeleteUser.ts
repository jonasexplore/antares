import { inject, injectable } from 'tsyringe';

import { UserNotFound } from '@modules/user/errors';
import { IUserRepository, USER } from '@modules/user/repositories';

@injectable()
class DeleteUser {
  constructor(
    @inject(USER.USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new UserNotFound();
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUser };
