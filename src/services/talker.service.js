const { readTalkers } = require('../utils/fsUtils');

const getAllTalkers = async () => {
  const allTalkers = await readTalkers();

  if (!allTalkers) {
    return { code: 400, message: 'Could not find the file' };
  }
  return { code: 200, message: allTalkers };
};

module.exports = {
  getAllTalkers,
};