import request from 'supertest';

import { prisma } from '@infra/database/prisma';
import { app } from '@infra/http/app';

describe('User', () => {
  describe('FindUserController', () => {
    const mockUuid = '73da848c-398f-4bdf-a8fb-cf8477513849';

    afterAll(async () => {
      const deleteUser = prisma.user.deleteMany();
      const deleteCity = prisma.city.deleteMany();

      await prisma.$transaction([deleteUser, deleteCity]);

      await prisma.$disconnect();
    });

    it('should be able to find an user', async () => {
      const user = await prisma.user.create({
        data: {
          name: 'John Doe',
          genre: 'FEMALE',
          birth_date: new Date(),
          city: {
            create: {
              name: 'Campinas',
              state: 'SP',
            },
          },
        },
      });

      await request(app).get(`/api/users/${user.id}`).expect(200);
    });

    it('should not be able to find an nonexistent user', async () => {
      await request(app).delete(`/api/users/${mockUuid}`).expect(404, {
        message: 'User not found',
        errorCode: 'USER_NOT_FOUND',
      });
    });
  });
});
