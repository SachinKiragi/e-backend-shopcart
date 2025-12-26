const products = [];

function createProduct(product){
    const newProduct = {
        id: products.length,
        ...product
    }
    products.push(newProduct);
    console.log(products);
    return newProduct;
}

function getProducts(){
    console.log(products);
    return products;
}

function getProduct(id){
    return products.filter(product => product.id == id)[0];    
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}