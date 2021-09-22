import { prisma } from '@infra/database/prisma';
import { User, UserMapper } from '@modules/user/domain';
import { CreateUserDTO, UpdateUserDTO } from '@modules/user/dtos';
import { IUserRepository } from '@modules/user/repositories';

class UsersRepository implements IUserRepository {
  async create({
    birth_date,
    city_id,
    genre,
    name,
  }: CreateUserDTO): Promise<User> {
    const persist = UserMapper.toPersistence({
      birth_date,
      city_id,
      genre,
      name,
    });

    const user = await prisma.user.create({
      data: persist,
    });

    return user ? UserMapper.toRender(user) : null;
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user ? UserMapper.toRender(user) : null;
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users.map(UserMapper.toRender);
  }

  async listByName(name: string): Promise<User[]> {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    return users.map(UserMapper.toRender);
  }

  async updateUser({ id, name }: UpdateUserDTO): Promise<void> {
    await prisma.user.update({
      data: {
        name,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}

export { UsersRepository };
