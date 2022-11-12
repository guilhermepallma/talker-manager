const jwt = require('jsonwebtoken');

// Eu sei que não posso deixar a KEY exposta no código.
const key = 'secret-password';

const createToken = (data) => {
  const token = jwt.sign({ data }, key, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, key);
    return { type: 200, message: data };
  } catch (error) {
    return { type: 401, message: { message: 'Expired or invalid token' } };
  }
};

module.exports = {
  createToken,
  verifyToken,
};