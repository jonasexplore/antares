import { UpdateUserDTO } from '@modules/user/dtos';
import { CreateUserDTO } from '@modules/user/dtos/CreateUser';
import { User } from '@modules/user/entities';

import { IUserRepository } from '..';

class MemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async create(data: CreateUserDTO): Promise<User> {
    const user = User.create(data);

    this.users.push(user);

    return user;
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async listByName(name: string): Promise<User[]> {
    return this.users.filter(user => user.name === name);
  }

  async updateUser({ id, name }: UpdateUserDTO): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);

    this.users[userIndex].name = name;
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);

    this.users.splice(userIndex, 1);
  }
}

export { MemoryUserRepository };
