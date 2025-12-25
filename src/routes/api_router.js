const express = require('express');
const apiRouter = express.Router();
const v1Router = require('./v1/index');
const pingRouterV2 = require('./v2/ping_router');
const v2Router = require('./v2/index');

apiRouter.use('/v1', v1Router);

apiRouter.use('/v2', v2Router);

module.exports = apiRouter;