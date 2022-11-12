const Joi = require('joi').extend(require('@joi/date'));

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const talkerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(18).required(),
  talk: Joi.object({
    watchedAt: Joi.string().required(),
    rate: Joi.number().integer().required(),
  }),
});

module.exports = {
  loginSchema,
  talkerSchema,
};