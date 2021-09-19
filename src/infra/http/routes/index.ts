import { Router } from 'express';

import { cityRoutes } from './city.routes';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use('/cities', cityRoutes);
routes.use('/users', userRoutes);

export { routes };
