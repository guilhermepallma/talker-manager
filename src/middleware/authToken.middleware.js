const { verifyToken } = require('../utils/jwt.utils');

const authToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' }); 
  }

  const verifySing = verifyToken(authorization, 'secret-password');

  if (verifySing.type === 401) {
    return res.status(verifySing.type).json(verifySing.message);
  }
  next();
};

module.exports = {
  authToken,
};
