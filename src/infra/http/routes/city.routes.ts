import { celebrate } from 'celebrate';
import { Router } from 'express';

import { ExpressAdapter } from '../adapters';
import {
  createCityController,
  listCityController,
} from '../factories/controllers';
import { cityValidator } from '../validators';

const cityRoutes = Router();

cityRoutes.post(
  '/',
  celebrate(cityValidator.BODY),
  ExpressAdapter.create(createCityController.handle),
);

cityRoutes.get(
  '/',
  celebrate(cityValidator.QUERY),
  ExpressAdapter.create(listCityController.handle),
);

export { cityRoutes };
