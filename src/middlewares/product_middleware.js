const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response")

function createProductValidator(req, res, next){
    if(!req.body.title){
        return res.status(400).json(errorResponse('Title', new BadRequest("Title")));
    }
    if(!req.body.description){
        return res.status(400).json(errorResponse('Desc', new BadRequest("Desc")));
    }
    if(!req.body.price){
        return res.status(400).json(errorResponse('Price', new BadRequest("Price")));
    }
    if(!req.body.image){
        return res.status(400).json(errorResponse('Image', new BadRequest("Image")));
    }
    if(!req.body.category){
        return res.status(400).json(errorResponse('Category', new BadRequest("Category")));
    }

    next();
}

module.exports = createProductValidator;