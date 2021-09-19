import request from 'supertest';

import { app } from '../../../../app';

describe('City', () => {
  describe('CreateCityController', () => {
    it('should be able to create a new city', async () => {
      await request(app)
        .post('/api/cities')
        .send({
          name: 'Barbalha',
          state: 'CE',
        })
        .expect(201);
    });

    it('should not be able to create an existent city', async () => {
      await request(app).post('/api/cities').send({
        name: 'Crato',
        state: 'CE',
      });

      await request(app)
        .post('/api/cities')
        .send({
          name: 'Crato',
          state: 'CE',
        })
        .expect(409, {
          message: 'City name already exists',
          errorCode: 'CITY_ALREADY_EXISTS',
        });
    });
  });
});
