const http = require('http');
const syncRequest = require('sync-request');
const fs = require('fs');
const path = require('path');


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

function getResponseBodyAsString(url){
    return String(getResponseBody(url));
}

function savePictureInSpecifiedFolder(url, folder){
    var response = getResponse(url);
    fs.mkdir(path.normalize(folder), { recursive: true }, (err) => {
        if (err){
            console.log(console.err);
            return false;
        }

        fs.writeFile(path.join(folder, 'mypicture.jpg'), response.getBody(), function(err){
            if(err){
                console.log(err);
                return false;
            }
            
        });
    });
   
    return true;
}

function savePictureFromWebPageInSpecifiedFolder(urlPageWithPicture, regexPicture, folder){
    var linkPicture = grabLinkOfPicture(urlPageWithPicture, regexPicture);

    savePictureInSpecifiedFolder(linkPicture, 'picture');
    
    return true;
}

function grabLinkOfPicture(urlPageWithPicture, regExpression){
    var responseBody = getResponseBodyAsString(urlPageWithPicture);
    var linkRegex = new RegExp(regExpression, 'g');
    var linkWithEnvelop = responseBody.match(linkRegex)[0]
    var link = linkWithEnvelop.match(new RegExp('http.*jpg'));
    return link;
}

function grabListOfLinks(urlWithLinks, linkRegExpression){
    var responseBody = getResponseBodyAsString(urlWithLinks);
    var linkRegex = new RegExp(linkRegExpression, 'g');
    var links = responseBody.match(linkRegex);
    return links;
}

module.exports.getHttpStatusCode = getHttpStatusCode;
module.exports.getResponseBody = getResponseBody;
module.exports.savePictureInSpecifiedFolder = savePictureInSpecifiedFolder;
module.exports.grabLinkOfPicture = grabLinkOfPicture;
module.exports.grabListOfLinks = grabListOfLinks;
module.exports.savePictureFromWebPageInSpecifiedFolder = savePictureFromWebPageInSpecifiedFolder;