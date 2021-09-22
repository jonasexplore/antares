import 'reflect-metadata';
import 'express-async-errors';
import { errors } from 'celebrate';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import '@shared/containers';

import { interceptorError } from '@infra/http/interceptors';
import { routes } from '@infra/http/routes';

const app = express();

app.use(express.json());
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  morgan('dev', { skip: (_req, _res) => process.env.NODE_ENV === 'test' }),
);
app.use(helmet());
app.use('/api', routes);
app.use(errors());
app.use(interceptorError);

export { app };
