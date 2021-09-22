import request from 'supertest';

import { prisma } from '@infra/database/prisma';

import { app } from '../../../../infra/http/app';

describe('City', () => {
  describe('ListCityController', () => {
    afterAll(async () => {
      await prisma.city.deleteMany();
      await prisma.$disconnect();
    });

    it('should be able to list all cities', async () => {
      await request(app).get('/api/cities').expect(200);
    });
  });
});
