const assert = require('chai').assert;
const linkFollower = require('../main.js');


describe('Testing my link follower', function(){

    var urlLapresse = 'https://www.lapresse.ca/';
    var urlPicture = 'https://images.lpcdn.ca/641x427/201902/09/1612163-pendant-jours-tas-glace-plus.jpg';
    var urlPaperWithPicture = 'https://www.lapresse.ca/actualites/grand-montreal/201902/09/01-5214132-longueuil-un-banc-de-glace-dans-une-voie-reservee.php';

    // it('Should get a successful status code', function(){
    //     var responseStatusCode = linkFollower.getHttpStatusCode(urlLapresse);
    //     assert.equal(responseStatusCode, 200);
    // });

   
    // it('Should get the body of Lapresse web page', function(){
    //     var responseBody = linkFollower.getResponseBody(urlLapresse);
    //     assert.match(responseBody, new RegExp('.*Le site d\'information francophone le plus complet en Amérique du Nord: Actualités régionales, provinciales, nationales et internationales.*'));
    // });

    // it('Should save a picture', function(){
    //     var isSaved = linkFollower.savePictureInSpecifiedFolder(urlPicture, 'Z:\\pictureTest');
    //     assert.isTrue(isSaved);
    // });


    // it('Should get the link of a picture based on regex', function(){
    //     var regExpression = 'href="https:\/\/images.lpcdn.ca\/.*jpg"';
    //     var expectedLink = 'https://images.lpcdn.ca/924x615/201902/09/1612163-pendant-jours-tas-glace-plus.jpg';

    //     var actualLink = linkFollower.grabLinkOfPicture(urlPaperWithPicture, regExpression);
    //     assert.equal(actualLink, expectedLink);
    // });


    it('Should get list of links', function(){
        var urlFlickr = 'https://blog.flickr.net/en/2018/11/07/the-commons-the-past-is-100-part-of-our-future/';
        var expectedLink0 = 'https://www.flickr.com/photos/nasacommons/9467312978/';
        var expectedLink1 = 'https://www.flickr.com/photos/nationallibrarynz_commons/3057385436/';
        var expectedLink2 = 'https://www.flickr.com/photos/nationalarchives/2966603041/';
        linkRegExpression = 'https:\/\/www.flickr.com\/photos\/.*\/\\d{10}/';
        
        var actualLinks =linkFollower.grabListOfLinks(urlFlickr, linkRegExpression);
        
        assert.isTrue(actualLinks.includes(expectedLink0));
        assert.isTrue(actualLinks.includes(expectedLink1));
        assert.isTrue(actualLinks.includes(expectedLink2));
    });

    // it('Should get ')

    // it('Test regex', function(){

    //     var regex = new RegExp('t[abce]st', 'g');
    //     var textToParse = 'Ceci est un test! Alors que cela est un tbst';
    //     var regexResult = textToParse.match(regex);
        
    //     console.log(regexResult);
    //     assert.equal(regexResult[0], 'test');
    //     assert.equal(regexResult[1], 'tbst');
    // });
});