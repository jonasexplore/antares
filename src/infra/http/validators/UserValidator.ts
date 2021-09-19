import { Joi, Segments } from 'celebrate';

const userValidator = {
  BODY: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().max(255),
      genre: Joi.string().required().valid('MALE', 'FEMALE'),
      birth_date: Joi.date().required(),
      city_id: Joi.string().uuid().required(),
    }),
  },

  QUERY: {
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().optional().max(255),
    }),
  },

  PARAMS: {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required().uuid(),
    }),
  },

  UPDATE: {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required().uuid(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().optional().max(255),
    }),
  },
};

export { userValidator };
