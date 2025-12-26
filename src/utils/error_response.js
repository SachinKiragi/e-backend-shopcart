function errorResponse(missingProperty, error){
    return {
            success: false,
            data: {},
            message: `${missingProperty} not present in the incoming request`,
            error: error
    }
}

module.exports = errorResponse;