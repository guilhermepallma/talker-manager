const { loginService } = require('../services');

const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.loginAuthService({ email, password });

  return res.status(type).json(message);
};

module.exports = { 
  loginAuth,
};