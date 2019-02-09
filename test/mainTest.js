const assert = require('chai').assert;
const linkFollower = require('../main.js');
const regexp = require

describe('Testing my link follower', function(){

    var urlVideotron = 'http://www.videotron.com/';
    var urlLapresse = 'https://www.lapresse.ca/';
    var urlNotFound = 'http://www.videotron.com/idontexist';

    it('Should get a successful status code', function(){
        var responseStatusCode = linkFollower.getHttpStatusCode(urlVideotron);
        assert.equal(responseStatusCode, 200);
    });

    it('Should get a "Not found" status code', function(){
        var responseStatusCode = linkFollower.getHttpStatusCode(urlNotFound);
        assert.equal(responseStatusCode, 404);
    });
    
    it('Should get the body of videotron web page', function(){
        var responseBody = linkFollower.getResponseBody(urlVideotron);
        assert.match(responseBody, new RegExp('.*Services de Téléphonie, Internet, Télévision et Mobile | Vidéotron.*'));
    });

    it('Should get the body of Lapresse web page', function(){
        var responseBody = linkFollower.getResponseBody(urlLapresse);
        assert.match(responseBody, new RegExp('.*Le site d\'information francophone le plus complet en Amérique du Nord: Actualités régionales, provinciales, nationales et internationales.*'));
    });
});