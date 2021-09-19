import request from 'supertest';

import { app } from '../../../../app';

describe('City', () => {
  describe('ListCityController', () => {
    it('should be able to list all cities', async () => {
      await request(app).get('/api/cities').expect(200, []);
    });
  });
});
