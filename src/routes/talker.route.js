const express = require('express');
const { talkerController } = require('../controllers');

const talkerRoutes = express.Router();

talkerRoutes.get('/', talkerController.allTalkers);

talkerRoutes.get('/:id', talkerController.talkersById);

module.exports = talkerRoutes;