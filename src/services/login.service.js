const { createToken } = require('../utils/jwt.utils');
const { validateLogin } = require('./schemas/validade.values');

const loginAuthService = async ({ email, password }) => {
  const error = validateLogin({ email, password });

  if (error.type) {
    return error;
  }

  const token = createToken({ email, password });

  return { type: 200, message: { token } };
};

module.exports = { 
  loginAuthService,
 };
