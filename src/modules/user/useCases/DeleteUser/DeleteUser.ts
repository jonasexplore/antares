import { UserNotFound } from '@modules/user/errors';
import { IUserRepository } from '@modules/user/repositories';

class DeleteUser {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new UserNotFound();
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUser };
