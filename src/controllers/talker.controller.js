const { talkerService } = require('../services');

const allTalkers = async (_req, res) => {
  const { type, message } = await talkerService.getAllTalkers();
  return res.status(type).json(message);
};

const talkersById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await talkerService.getTalkerById(id);
  return res.status(type).json(message);
};

module.exports = {
  allTalkers,
  talkersById,
};
