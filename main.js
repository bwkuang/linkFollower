var mainUrl = "https://www.lapresse.ca/index.html";

function asyncCall(url){
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}

function syncCall(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    // xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://getpocket.com");
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

asyncCall(mainUrl);