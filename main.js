const http = require('http');
const syncRequest = require('sync-request');

function getResponse(url){
    return syncRequest('GET', url); 
}

function getHttpStatusCode(url){
    var response = getResponse(url);
    return response.statusCode;
}

function getResponseBody(url){
    var response = getResponse(url);
    return response.getBody();
}

module.exports.getHttpStatusCode = getHttpStatusCode;
module.exports.getResponseBody = getResponseBody;