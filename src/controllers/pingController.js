function pingController(request, response){
    return response.json({message: 'ohk'});
}

module.exports = {
    pingController
}