const express = require('express');
const { productController } = require('../../controllers/v2/productController');
const productRouter = express.Router();

productRouter.use('/product', productController);

module.exports = productRouter;