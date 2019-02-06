const assert = require('chai').assert;
const linkFollower = require('../main.js');

describe('Testing my link follower', function(){


    let x = 10;

    it('Check if variable is a number', function(){
        assert.isNumber(x);
    });

    it('Should get a web page', function(){
        url = 'http://www.videotron.com/';
        assert.equal(linkFollower.getHttpStatusCode(url), 200);
    });

});