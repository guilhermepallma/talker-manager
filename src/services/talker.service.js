const { readTalkers } = require('../utils/fsUtils');

const getAllTalkers = async () => {
  const allTalkers = await readTalkers();

  if (!allTalkers.length) {
    return { type: 400, message: { message: 'Empty or not found file' } };
  }
  return { type: 200, message: allTalkers };
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

getTalkerById();

module.exports = {
  getAllTalkers,
  getTalkerById,
};