function productController(request, response){
    response.json({message: 'V2: Product here'});
}

module.exports = {
    productController
}