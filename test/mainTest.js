const assert = require('chai').assert;
const linkFollower = require('../main.js');
const regexp = require

describe('Testing my link follower', function(){

    var urlVideotron = 'http://www.videotron.com/';
    var urlNotFound = 'http://www.videotron.com/idontexist';

    it('Should get a successful status code', function(){
        var responseStatusCode = linkFollower.getHttpStatusCode(urlVideotron);
        assert.equal(responseStatusCode, 200);
    });

    it('Should get the body of videotron web page', function(){
        var responseBody = linkFollower.getResponseBody(urlVideotron);
        assert.match(responseBody, new RegExp('.*Services de Téléphonie, Internet, Télévision et Mobile | Vidéotron.*'));
    });

    it('Should get a "Not found" status code', function(){
        var responseStatusCode = linkFollower.getHttpStatusCode(urlNotFound);
        assert.equal(responseStatusCode, 404);
    });


});