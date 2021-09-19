import { ListUserDTO } from '@modules/user/dtos/ListUser';
import { User } from '@modules/user/entities';
import { IUserRepository } from '@modules/user/repositories';

class ListUser {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute({ name }: ListUserDTO): Promise<User[]> {
    if (name) {
      return this.usersRepository.listByName(name);
    }

    return this.usersRepository.list();
  }
}

export { ListUser };
