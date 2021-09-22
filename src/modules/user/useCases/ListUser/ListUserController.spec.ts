import request from 'supertest';

import { prisma } from '@infra/database/prisma';

import { app } from '../../../../infra/http/app';

describe('User', () => {
  describe('ListUserController', () => {
    afterAll(async () => {
      const deleteUser = prisma.user.deleteMany();
      const deleteCity = prisma.city.deleteMany();

      await prisma.$transaction([deleteUser, deleteCity]);

      await prisma.$disconnect();
    });

    it('should be able to list users', async () => {
      await prisma.user.create({
        data: {
          name: 'Doe John',
          genre: 'MALE',
          birth_date: new Date(),
          city: {
            create: {
              name: 'São Paulo',
              state: 'SP',
            },
          },
        },
      });

      await request(app).get(`/api/users`).expect(200);
    });
  });
});
