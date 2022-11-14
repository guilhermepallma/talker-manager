const express = require('express');
const { talkerController } = require('../controllers');

const talkerRoutes = express.Router();

talkerRoutes.get('/', talkerController.allTalkers);

talkerRoutes.get('/:id', talkerController.talkersById);

talkerRoutes.post('/', talkerController.registerNewTalker);

talkerRoutes.put('/:id', talkerController.updateTalker);

talkerRoutes.delete('/:id', talkerController.deleteTalker);

module.exports = talkerRoutes;