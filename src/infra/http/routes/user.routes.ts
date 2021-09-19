import { celebrate } from 'celebrate';
import { Router } from 'express';

import { ExpressAdapter } from '../adapters';
import {
  createUserController,
  deleteUserController,
  findUserController,
  listUserController,
  updateUserController,
} from '../factories/controllers';
import { userValidator } from '../validators';

const userRoutes = Router();

userRoutes.post(
  '/',
  celebrate(userValidator.BODY),
  ExpressAdapter.create(createUserController.handle),
);

userRoutes.get(
  '/',
  celebrate(userValidator.QUERY),
  ExpressAdapter.create(listUserController.handle),
);

userRoutes.get(
  '/:id',
  celebrate(userValidator.PARAMS),
  ExpressAdapter.create(findUserController.handle),
);

userRoutes.delete(
  '/:id',
  celebrate(userValidator.PARAMS),
  ExpressAdapter.create(deleteUserController.handle),
);

userRoutes.patch(
  '/:id',
  celebrate(userValidator.UPDATE),
  ExpressAdapter.create(updateUserController.handle),
);

export { userRoutes };
