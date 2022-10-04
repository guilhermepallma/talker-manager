const fs = require('fs').promises;

const source = './src/talker.json';

const talkers = async () => {
  try {
  const data = await fs.readFile(source);
  const response = JSON.parse(data);
  return response;
  } catch (erro) {
    console.error(`Erro ao ler o arquivo: ${erro.path}`);
  }
};

module.exports = talkers;