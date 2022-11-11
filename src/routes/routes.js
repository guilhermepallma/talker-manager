const express = require('express');
const talkerRoutes = require('./talker.route');

const routes = express.Router();

routes.use('/talker', talkerRoutes);

module.exports = routes; 