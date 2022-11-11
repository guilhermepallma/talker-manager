const { talkerService } = require('../services');

const allTalkers = async (_req, res) => {
  const { code, message } = await talkerService.getAllTalkers();
  return res.status(code).json(message);
};

module.exports = {
  allTalkers,
};
