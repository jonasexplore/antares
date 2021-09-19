import { User } from '../domain';
import { UpdateUserDTO } from '../dtos';
import { CreateUserDTO } from '../dtos/CreateUser';

interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>;
  listByName(name: string): Promise<User[]>;
  updateUser(data: UpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUserRepository };
