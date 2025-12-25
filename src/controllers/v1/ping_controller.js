function pingController(request, response){
    return response.json({message: 'v1: ohhk'});
}

module.exports = {
    pingController
}