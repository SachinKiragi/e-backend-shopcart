function productController(request, response){
    response.json({message: "v1: Product here!"});
}

module.exports = {
    productController
}