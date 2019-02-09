const http = require('http');
const syncRequest = require('sync-request');

function getHttpStatusCode(url){
    var response = syncRequest('GET', url);
    return response.statusCode;
    // return 200;
}

function getResponseBody(url){
    return '123 Services de Téléphonie, Internet, Télévision et Mobile | Vidéotron 123';
}

module.exports.getHttpStatusCode = getHttpStatusCode;
module.exports.getResponseBody = getResponseBody;