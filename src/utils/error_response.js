function errorResponse(ReasonPhrases, error){
    return {
            success: false,
            data: {},
            message: ReasonPhrases,
            error: error
    }
}

module.exports = errorResponse;