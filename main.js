const http = require('http');

function getHttpStatusCode(url){

    var request = http.request();
    request.url = url;
    var socket = request.createConnection;
    

    return 100;
}

module.exports.getHttpStatusCode = getHttpStatusCode;