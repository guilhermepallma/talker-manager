const { readTalkers } = require('../../utils/fsUtils');

const validateQuery = (request, response, next) => {
  const query = request.query.q;
  if (!query) {
    return response.status(200).json({ readTalkers });
  }
  next();
};

module.exports = validateQuery;