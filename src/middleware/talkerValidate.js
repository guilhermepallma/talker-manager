const talkers = require('../utils/fsUtils');

const talkerValidate = async (request, response, next) => {
  const { id } = await request.params;
  const data = await talkers();
  const talkerId = data.find((element) => element.id === Number(id));

  if (talkerId) {
    return response.status(200).json(talkerId);
  }
  next();
};

module.exports = talkerValidate;