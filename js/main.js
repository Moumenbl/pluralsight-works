// JavaScript Document 
var hotelInfo;
var details;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.JSON', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function (){
	if(xhr.status === 200){
		hotelInfo = JSON.parse(xhr.responseText);
		console.log(hotelInfo);
	}// end if
}// end Func

function display(x){
	console.log(x);
}



