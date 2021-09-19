import { Router } from 'express';

import { cityRoutes } from './city.routes';

const routes = Router();

routes.use('/cities', cityRoutes);

export { routes };
