 var mainUrl = 'https://www.isen.com/papers/Dawnstupid.html';
// var mainUrl = "test.txt";

function asyncCall(url){
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            // callback(xmlHttp.responseText);
			console.log(xmlHttp.responseText);
			console.log(xmlHttp.status);
			console.log("hello world");
        }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}

function syncCall(url){
    
	var xmlHttp = new XMLHttpRequest();
	
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    console.log("hello world 1");
	xmlHttp.send();
	
	console.log(xmlHttp.status);
	console.log(xmlHttp.readyState);
	console.log(xmlHttp.responseText);
	console.log("hello world 2");
}

syncCall(mainUrl);