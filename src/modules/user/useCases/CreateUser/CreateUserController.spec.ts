import request from 'supertest';

import { prisma } from '@infra/database/prisma';
import { app } from '@infra/http/app';

describe('User', () => {
  describe('CreateUserController', () => {
    const mockUuid = '73da848c-398f-4bdf-a8fb-cf8477513849';

    afterAll(async () => {
      const deleteUser = prisma.user.deleteMany();
      const deleteCity = prisma.city.deleteMany();

      await prisma.$transaction([deleteUser, deleteCity]);

      await prisma.$disconnect();
    });

    it('should be able to create a new user', async () => {
      const city = await prisma.city.create({
        data: {
          name: 'Sorocaba',
          state: 'SP',
        },
      });

      await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          genre: 'FEMALE',
          birth_date: new Date(),
          city_id: city.id,
        })
        .expect(201);
    });

    it('should not be able to create an user with nonexistent city', async () => {
      await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          genre: 'FEMALE',
          birth_date: new Date(),
          city_id: mockUuid,
        })
        .expect(404, {
          message: 'City not found',
          errorCode: 'CITY_NOT_FOUND',
        });
    });
  });
});
