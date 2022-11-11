const { talkerService } = require('../services');

const allTalkers = async (_req, res) => {
  const { code, message } = await talkerService.getAllTalkers();
  return res.status(code).json(message);
};

const talkersById = async (req, res) => {
  const { id } = req.params;
  const { code, message } = await talkerService.getTalkerById(id);
  return res.status(code).json(message);
};

module.exports = {
  allTalkers,
  talkersById,
};
