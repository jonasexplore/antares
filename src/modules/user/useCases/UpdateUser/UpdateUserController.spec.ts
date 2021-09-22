import request from 'supertest';

import { prisma } from '@infra/database/prisma';
import { app } from '@infra/http/app';

describe('User', () => {
  describe('UpdateUserController', () => {
    const mockUuid = '73da848c-398f-4bdf-a8fb-cf8477513849';

    afterAll(async () => {
      await prisma.user.deleteMany();
      await prisma.city.deleteMany();

      await prisma.$disconnect();
    });

    it('should be able to list users', async () => {
      const user = await prisma.user.create({
        data: {
          name: 'John Doe',
          genre: 'FEMALE',
          birth_date: new Date(),
          city: {
            create: {
              name: 'Osasco',
              state: 'SP',
            },
          },
        },
      });

      await request(app)
        .patch(`/api/users/${user.id}`)
        .send({ name: 'Doe John' })
        .expect(204);
    });

    it('should not be able to update a nonexistent user', async () => {
      await request(app)
        .patch(`/api/users/${mockUuid}`)
        .send({ name: 'Doe John' })
        .expect(404, {
          message: 'User not found',
          errorCode: 'USER_NOT_FOUND',
        });
    });
  });
});
