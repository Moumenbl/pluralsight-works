// JavaScript Document 

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.JSON', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
	if (xhr.status === 200) {
		var myStuff = JSON.parse(xhr.responseText);
		console.log(myStuff);
		console.Log(myStuff[i]);
	}// end if
}// end func




