const { loginSchema } = require('./schemas');

const validateLogin = (user) => {
  const { error, value } = loginSchema.validate(user);
  if (error) {
    return { type: 400, message: { message: error.details[0].message } };
  }
  return { type: null, message: value };
};

module.exports = {
  validateLogin,
};
