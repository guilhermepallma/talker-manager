const express = require('express');
const { authToken } = require('../middleware/authToken.middleware');
const loginRoutes = require('./login.route');
const talkerRoutes = require('./talker.route');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use(authToken);
routes.use('/talker', talkerRoutes);

module.exports = routes; 