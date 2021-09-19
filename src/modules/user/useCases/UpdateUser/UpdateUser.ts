import { UpdateUserDTO } from '@modules/user/dtos';
import { UserNotFound } from '@modules/user/errors';
import { IUserRepository } from '@modules/user/repositories';

class UpdateUser {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute(data: UpdateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findById(data.id);

    if (!userExists) {
      throw new UserNotFound();
    }

    await this.usersRepository.updateUser(data);
  }
}

export { UpdateUser };
