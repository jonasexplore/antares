import { MemoryCityRepository } from '@modules/city/repositories';

import { ListCity } from './ListCity';

describe('City', () => {
  let listCity: ListCity;
  let citiesRepository: MemoryCityRepository;

  describe('ListCity', () => {
    beforeEach(() => {
      citiesRepository = new MemoryCityRepository();
      listCity = new ListCity(citiesRepository);
    });

    it('should be able to list city by name', async () => {
      await citiesRepository.create({
        name: 'Barbalha',
        state: 'CE',
      });

      const cities = await listCity.execute({ name: 'Barbalha' });

      expect(cities.length).toBe(1);
    });

    it('should be able to list city by name', async () => {
      await citiesRepository.create({
        name: 'Barbalha',
        state: 'CE',
      });

      const cities = await listCity.execute({ state: 'CE' });

      expect(cities.length).toBe(1);
    });

    it.todo('should be able to list all cities');
  });
});
