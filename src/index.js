const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./utils/fsUtils');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_request, response) => {
  const data = await talkers();
  response.status(HTTP_OK_STATUS).json(data);
});

app.get('/talker/:id', async (request, response) => {
  const { id } = await request.params;
  const data = await talkers();
  const talkerId = await data.find((element) => element.id === Number(id));

  if (talkerId) {
    return response.status(HTTP_OK_STATUS).json(talkerId);
  }
  response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
});

app.listen(PORT, () => {
  console.log('Online');
});
