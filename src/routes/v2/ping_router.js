const express = require('express');
const { pingController } = require('../../controllers/v2/ping_controller');
const pingRouter = express.Router();

pingRouter.get('/ping', pingController);

module.exports = pingController;