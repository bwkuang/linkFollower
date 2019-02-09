const assert = require('chai').assert;
const linkFollower = require('../main.js');


describe('Testing my link follower', function(){

    var urlLapresse = 'https://www.lapresse.ca/';
    var urlPicture = 'https://images.lpcdn.ca/641x427/201902/09/1612163-pendant-jours-tas-glace-plus.jpg';
    var urlPaperWithPicture = 'https://www.lapresse.ca/actualites/grand-montreal/201902/09/01-5214132-longueuil-un-banc-de-glace-dans-une-voie-reservee.php';

    it('Should get a successful status code', function(){
        var responseStatusCode = linkFollower.getHttpStatusCode(urlLapresse);
        assert.equal(responseStatusCode, 200);
    });

   
    it('Should get the body of Lapresse web page', function(){
        var responseBody = linkFollower.getResponseBody(urlLapresse);
        assert.match(responseBody, new RegExp('.*Le site d\'information francophone le plus complet en Amérique du Nord: Actualités régionales, provinciales, nationales et internationales.*'));
    });

    it('Should save a picture', function(){
        var isSaved = linkFollower.savePictureInSpecifiedFolder(urlPicture, 'Z:\\pictureTest');
        assert.isTrue(isSaved);
    });


    it('Should get the link of a picture based on regex', function(){
        var regExpression = 'href="https:\/\/images.lpcdn.ca\/.*jpg"';
        var expectedLink = 'https://images.lpcdn.ca/924x615/201902/09/1612163-pendant-jours-tas-glace-plus.jpg';

        var actualLink = linkFollower.grabLinkOfPicture(urlPaperWithPicture, regExpression);
        assert.equal(actualLink, expectedLink);
    });


    it('Should get list of links', function(){
        assert.isTrue(true);
    });

    // it('Test regex', function(){

    //     var regex = new RegExp('t[abce]st');
    //     var textToParse = 'Ceci est un test!';
    //     assert.equal(textToParse.match(regex)[0], 'test');
    // });
});