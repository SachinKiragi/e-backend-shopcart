const {StatusCodes, ReasonPhrases} = require('http-status-codes')
const productService = require('../../services/product_service');

function createProduct(req, res){
    try {
        const response = productService.createProduct(req.body);
        return res
                .status(StatusCodes.CREATED)
                .json({
            success: true,
            error: {},
            message: ReasonPhrases.CREATED + " Product",
            data: response
        })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

function getProducts(req, res){
    try {
        const response = productService.getProducts();
        return res.json(response);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

function getProduct(req, res){
    try {
        const response = productService.getProduct(req.params.id);
        return res.json(response);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}