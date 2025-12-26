class BadRequest extends Error {
    constructor(propertyMissing){
        const errorMessage = `${propertyMissing} is missing`;
        super(propertyMissing);
        this.statusCode = 400;
        this.errorMessage = errorMessage;
    }
}

module.exports = BadRequest;