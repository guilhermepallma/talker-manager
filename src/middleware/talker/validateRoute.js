const { readTalkers } = require('../../utils/fsUtils');

const validateRoute = async (request, response, next) => {
  const { id } = await request.params;
  const data = await readTalkers();
  const talkerId = data.find((element) => element.id === Number(id));

  if (talkerId) {
    return response.status(200).json(talkerId);
  }
  next();
};

module.exports = validateRoute;