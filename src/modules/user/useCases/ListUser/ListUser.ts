import { inject, injectable } from 'tsyringe';

import { ListUserDTO } from '@modules/user/dtos/ListUser';
import { User } from '@modules/user/entities';
import { IUserRepository, USER } from '@modules/user/repositories';

@injectable()
class ListUser {
  constructor(
    @inject(USER.USER_REPOSITORY)
    private readonly usersRepository: IUserRepository,
  ) {}

  async execute({ name }: ListUserDTO): Promise<User[]> {
    if (name) {
      return this.usersRepository.listByName(name);
    }

    return this.usersRepository.list();
  }
}

export { ListUser };
