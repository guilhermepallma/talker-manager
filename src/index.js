const express = require('express');
const routes = require('./routes/routes');

// const { readTalkers, writeTalker, deleteTalker } = require('./utils/fsUtils');
// const generateToken = require('./utils/generateToken');

// const validateRoute = require('./middleware/talker/validateRoute');
// const validateEmail = require('./middleware/login/validateEmail');
// const validatePassword = require('./middleware/login/validatePassword');
// const validateToken = require('./middleware/talker/validateToken');
// const validateName = require('./middleware/talker/validateName');
// const validateAge = require('./middleware/talker/validateAge');
// const validateTalk = require('./middleware/talker/validateTalk');
// const validateRate = require('./middleware/talker/validateRate');
// const validateQuery = require('./middleware/talker/validateQuery');

const app = express();

app.use(express.json());
app.use('/', routes);

const HTTP_OK_STATUS = 200;
const PORT = '3000';
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// app.get('/talker', async (request, response) => {
//   const search = request.query;
//   console.log(search);
//   const allTalkers = await readTalkers();
//   response.status(HTTP_OK_STATUS).json(allTalkers);
// });

// app.get('/talker/search', validateToken, validateQuery, async (request, response) => {
//   const query = request.query.q;
//   const allTalkers = await readTalkers();
//   const queryFilter = allTalkers.filter((element) => element.name.includes(query));
//   response.status(HTTP_OK_STATUS).json(queryFilter);
// });

// app.get('/talker/:id', validateRoute, (_request, response) => {
//   response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
// });

// app.post('/login', validateEmail, validatePassword, (_request, response) => {
//   const token = generateToken();
//   response.status(HTTP_OK_STATUS).json({ token });
// });

// app.post('/talker',
// validateToken, 
// validateName, 
// validateAge, 
// validateTalk, 
// validateRate,
// async (request, response) => {
//   const talker = request.body;
//   const allTalkers = await readTalkers();
//   const newTalker = { id: allTalkers.length + 1, ...talker };
//   await writeTalker([...allTalkers, newTalker]);
//   response.status(201).json(newTalker);
// });

// app.put('/talker/:id',
// validateToken, 
// validateName, 
// validateAge, 
// validateTalk, 
// validateRate,
// async (request, response) => {
//   const { id } = request.params;
//   const talker = { ...request.body };
//   const allTalkers = await readTalkers();
//   const index = allTalkers.findIndex((element) => element.id === Number(id));
//   allTalkers[index] = { ...allTalkers[index], ...talker };
//   await writeTalker(allTalkers);
//   response.status(HTTP_OK_STATUS).json(allTalkers[index]);
// });

// app.delete('/talker/:id', validateToken, async (request, response) => {
//   const { id } = request.params;
//   await deleteTalker(Number(id));
//   response.status(204).end();
// });

app.listen(PORT, () => {
  console.log('Online');
});

module.exports = app;