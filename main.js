const http = require('http');
const syncRequest = require('sync-request');
const fs = require('fs');

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

function savePictureInSpecifiedFolder(url, folder){
    var response = getResponse(url);
    fs.writeFile(folder + '\\mypicture.jpg', response.getBody(), function(err){
        if(err){
            console.log(err);
            return false;
        }
        
    });
    return true;
}

function grabLinkOfPicture(urlPaperWithPicture, regExpression){
    var responseBody = String(getResponse(urlPaperWithPicture).getBody());
    var linkRegex = new RegExp(regExpression);
    var linkWithEnvelop = responseBody.match(linkRegex)[0]
    var link = linkWithEnvelop.match(new RegExp('http.*jpg'));
    return link;
}

module.exports.getHttpStatusCode = getHttpStatusCode;
module.exports.getResponseBody = getResponseBody;
module.exports.savePictureInSpecifiedFolder = savePictureInSpecifiedFolder;
module.exports.grabLinkOfPicture = grabLinkOfPicture;