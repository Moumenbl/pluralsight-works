// JavaScript Document 

var  dataReq = new XMLHttpRequest();

dataReq.open('GET', 'data.JSON', true);
dataReq.responseType = 'text';


dataReq.onload = function () {
	if (dataReq.status === 200) {
		var myStuff = JSON.parse(dataReq.responseText);
		console.log(myStuff);
	}//end if

}// function end

dataReq.send();


