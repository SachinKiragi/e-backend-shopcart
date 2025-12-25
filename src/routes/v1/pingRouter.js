const express = require('express');
const { pingController } = require('../../controllers/v1/pingController');
const pingRouter = express.Router();

pingRouter.get('/', pingController);

module.exports = pingRouter;