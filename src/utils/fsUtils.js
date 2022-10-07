const fs = require('fs').promises;
const path = require('path');

const pathTalker = path.resolve(__dirname, '..', 'talker.json');

const readTalkers = async () => {
  try {
  const data = await fs.readFile(pathTalker, 'utf-8');
  const response = JSON.parse(data);
  return response;
  } catch (erro) {
    console.error(`Erro ao ler o arquivo: ${erro.path}`);
  }
};

const writeTalker = async (newTalker) => {
  try {
    fs.writeFile(pathTalker, JSON.stringify(newTalker));
  } catch (erro) {
    console.error(`Erro ao escrever o arquivo: ${erro.path}`);
  }
};

const deleteTalker = async (id) => {
  const allTalkers = await readTalkers();
  const filterTalker = allTalkers.filter((talker) => talker.id !== id);
  try {
    fs.writeFile(pathTalker, JSON.stringify(filterTalker));
  } catch (erro) {
    console.error(`Erro ao escrever o arquivo: ${erro.path}`);
  }
};

module.exports = {
  writeTalker,
  readTalkers,
  deleteTalker,
};