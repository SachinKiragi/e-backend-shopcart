const express = require('express');
const { pingController } = require('../../controllers/v1/ping_controller');
const pingRouter = express.Router();

pingRouter.get('/', pingController);

module.exports = pingRouter;