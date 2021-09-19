import { inject, injectable } from 'tsyringe';

import { UpdateUserDTO } from '@modules/user/dtos';
import { UserNotFound } from '@modules/user/errors';
import { IUserRepository, USER } from '@modules/user/repositories';

@injectable()
class UpdateUser {
  constructor(
    @inject(USER.USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,
  ) {}

  async execute(data: UpdateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findById(data.id);

    if (!userExists) {
      throw new UserNotFound();
    }

    await this.usersRepository.updateUser(data);
  }
}

export { UpdateUser };
