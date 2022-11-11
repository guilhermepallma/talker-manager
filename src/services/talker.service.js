const { readTalkers } = require('../utils/fsUtils');

const getAllTalkers = async () => {
  const allTalkers = await readTalkers();

  if (!allTalkers) {
    return { code: 400, message: 'There are no registered talkers' };
  }
  return { code: 200, message: allTalkers };
};

module.exports = {
  getAllTalkers,
};