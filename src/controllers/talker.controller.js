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

const talkersByQuery = async (req, res) => {
  const query = req.query.q;
  const { type, message } = await talkerService.getTalkerByQuery(query);

  return res.status(type).json(message);
};

const registerNewTalker = async (req, res) => {
  const newTalker = req.body;
  const { type, message } = await talkerService.createNewTalker(newTalker);

  return res.status(type).json(message);
};

const updateTalker = async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  const { type, message } = await talkerService.editTalker({ update, id });

  return res.status(type).json(message);
};

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await talkerService.deleteTalkerById(id);

  return res.status(type).json(message);
};

module.exports = {
  allTalkers,
  talkersById,
  talkersByQuery,
  registerNewTalker,
  updateTalker,
  deleteTalker,
};
