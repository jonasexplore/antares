import 'reflect-metadata';
import 'express-async-errors';
import { errors } from 'celebrate';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { interceptorError } from '@infra/http/interceptors';

import '@shared/containers';
import { routes } from '@infra/http/routes';

const app = express();

app.use(express.json());
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(helmet());
app.use('/api', routes);
app.use(errors());
app.use(interceptorError);

export { app };
