// JavaScript Document 

var  dataReq = new XMLHttpRequest();

dataReq.open('GET', 'data.JSON', true);
dataReq.responseText = 'text';


dataReq.onreadystatechange = function () {
	console.log(dataReq.readyState);
	console.log(dataReq.status);
	console.log(dataReq.statusText);
}//end function

dataReq.onload = function () {

	if (dataReq === 200) {
		var myStuff = JSON.parse(dataReq.responseText);
		console.log(myStuff);
	}//end if

}// function end

dataReq.send();


