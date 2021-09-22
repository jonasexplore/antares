import { validate } from 'uuid';

import { CityAlreadyExists } from '@modules/city/errors';
import { MemoryCityRepository } from '@modules/city/repositories';

import { CreateCity } from '.';

describe('City', () => {
  let createCity: CreateCity;
  let citiesRepository: MemoryCityRepository;

  describe('CreateCity', () => {
    beforeEach(() => {
      citiesRepository = new MemoryCityRepository();
      createCity = new CreateCity(citiesRepository);
    });

    it('should be able to create a new city', async () => {
      const createdCity = await createCity.execute({
        name: 'Barbalha',
        state: 'CE',
      });

      expect(createdCity).toHaveProperty('id');
      expect(validate(createdCity.id)).toBeTruthy();
      expect(createdCity.name.length > 0).toBeTruthy();
    });

    it('should not be able to create a duplicated city', async () => {
      await createCity.execute({
        name: 'Barbalha',
        state: 'CE',
      });

      await expect(
        createCity.execute({
          name: 'Barbalha',
          state: 'CE',
        }),
      ).rejects.toEqual(new CityAlreadyExists());
    });
  });
});
