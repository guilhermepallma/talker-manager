const express = require('express');
const bodyParser = require('body-parser');

const talkers = require('./utils/fsUtils');
const generateToken = require('./utils/generateToken');

const emailValidate = require('./middleware/emailValidate');
const passValidate = require('./middleware/passValidate');
const talkerValidate = require('./middleware/talkerValidate');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(200).send();
});

app.get('/talker', async (_request, response) => {
  const data = await talkers();
  response.status(200).json(data);
});

app.get('/talker/:id', talkerValidate, (_request, response) => {
  response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', emailValidate, passValidate, (_request, response) => {
  const token = generateToken();
  response.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log('Online');
});

module.exports = app;