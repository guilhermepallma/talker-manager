const { readTalkers, writeTalker, deleteTalker } = require('../utils/fsUtils');
const { validateTalker } = require('./schemas/validade.values');

const getAllTalkers = async () => {
  const allTalkers = await readTalkers();

  if (!allTalkers.length) {
    return { type: 400, message: { message: 'Empty or not found file' } };
  }
  return { type: 200, message: allTalkers };
};

const getTalkerByQuery = async (query) => {
  const allTalkers = await readTalkers();
  const queryFilter = await allTalkers.filter((talker) => talker.name.includes(query));

  if (!queryFilter.length) {
    return { type: 200, message: allTalkers };
  }
  return { type: 200, message: queryFilter };
};

const getTalkerById = async (id) => {
  const allTalkers = await readTalkers();
  // filter retorna id string, precisa ser convertido para number ai sim /:id funciona.
  const filterTalker = allTalkers.filter((talkerId) => talkerId.id === Number(id));

  if (!filterTalker.length) {
    return { type: 404, message: { message: 'Talker not found' } };
  }
  return { type: 200, message: filterTalker };
};

const createNewTalker = async (newTalker) => {
  const error = validateTalker(newTalker);

  if (error.type) {
    return error;
  }
  
  const allTalkers = await readTalkers();
  const newRegister = { id: allTalkers.length + 1, ...newTalker };
  
  allTalkers.push(newRegister);

  await writeTalker(allTalkers);

  return { type: 201, message: newRegister };
};

const editTalker = async ({ update, id }) => {
  const error = validateTalker(update);

  if (error.type) {
    return error;
  }

  const allTalkers = await readTalkers();
  const index = allTalkers.findIndex((element) => element.id === Number(id));

  allTalkers[index] = { ...allTalkers[index], ...update };

  await writeTalker(allTalkers);

  return { type: 201, message: allTalkers[index] };
};

const deleteTalkerById = async (id) => {
  const allTalkers = await readTalkers();

  const filterTalkerById = allTalkers.filter((talkerId) => talkerId.id === Number(id));

  if (!filterTalkerById.length) {
    return { type: 404, message: { message: 'Talker not found' } };
  } 
    await deleteTalker(id);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  getTalkerByQuery,
  createNewTalker,
  editTalker,
  deleteTalkerById,
};