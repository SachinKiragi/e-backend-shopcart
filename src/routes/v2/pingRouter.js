const express = require('express');
const { pingController } = require('../../controllers/v2/pingController');
const pingRouter = express.Router();

pingRouter.get('/ping', pingController);

module.exports = pingController;