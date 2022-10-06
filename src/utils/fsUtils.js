const fs = require('fs').promises;
const path = require('path');

const talkers = async () => {
  try {
  const pathTalker = path.resolve(__dirname, '..', 'talker.json');
  const data = await fs.readFile(pathTalker, 'utf-8');
  const response = JSON.parse(data);
  return response;
  } catch (erro) {
    console.error(`Erro ao ler o arquivo: ${erro.path}`);
  }
};

module.exports = talkers;