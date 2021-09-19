import { prisma } from '@infra/database/prisma';
import { City } from '@modules/city/domain';
import { CreateCityDTO } from '@modules/city/dtos';
import { ICityRepository } from '@modules/city/repositories';

class CitiesRepository implements ICityRepository {
  async create(data: CreateCityDTO): Promise<City> {
    return prisma.city.create({
      data,
    });
  }

  async findById(id: string): Promise<City> {
    return prisma.city.findUnique({
      where: {
        id,
      },
    });
  }

  async findByName(name: string): Promise<City> {
    return prisma.city.findUnique({
      where: {
        name,
      },
    });
  }

  async list(): Promise<City[]> {
    return prisma.city.findMany();
  }

  async listByName(name: string): Promise<City[]> {
    return prisma.city.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async listByState(state: string): Promise<City[]> {
    return prisma.city.findMany({
      where: {
        state: {
          contains: state,
        },
      },
    });
  }
}

export { CitiesRepository };
