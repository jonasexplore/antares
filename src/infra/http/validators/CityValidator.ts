import { Joi, Segments } from 'celebrate';

const cityValidator = {
  BODY: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().max(255),
      state: Joi.string().required().max(255),
    }),
  },

  QUERY: {
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().optional().max(255),
      state: Joi.string().optional().max(255),
    }),
  },
};

export { cityValidator };
