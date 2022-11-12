const express = require('express');
const { loginController } = require('../controllers');

const loginRoutes = express.Router();

loginRoutes.post('/', loginController.loginAuth);

module.exports = loginRoutes;