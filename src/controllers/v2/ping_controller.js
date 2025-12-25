function pingController(request, response){
    return response.json({message: 'v2: ohhk'});
}

module.exports = {
    pingController
}