let color = "";
let len = 0;
let i = 0;
var points = 0;
const text = "Total:";
function orange() {
	 color = document.getElementsByClassName("orange");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#ff6600";
	 	points += 5;
	 }
	 document.getElementById("total").innerHTML = text +	points;
}
function green() {
	 color = document.getElementsByClassName("green");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#00ff00";
	 	points += 7;
	 }
	 document.getElementById("total").innerHTML = text +	points;
}
function voilet() {
	 color = document.getElementsByClassName("voilet");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#5200cc";
	 	points += 8;
	 }
	 document.getElementById("total").innerHTML = text +	points;
}
function aqua() {
	 color = document.getElementsByClassName("aqua");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#00ffff";
	 	points += 15;
	 }
	 document.getElementById("total").innerHTML = text +	points;
}
function pink() {
	 color = document.getElementsByClassName("pink");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#ff4dff";
	 	points += 5;
	 }
	 document.getElementById("total").innerHTML = text +	points;
}
function yellow() {
	 color = document.getElementsByClassName("yellow");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#ffff00";
	 	points += 10;
	 }
	 document.getElementById("total").innerHTML = text +	points;
}
function white1() {
	color = document.getElementById("white1");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;	
}
function white2() {
	color = document.getElementById("white2");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;	
}
function white3() {
	color = document.getElementById("white3");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;	
}
function white4() {
	color = document.getElementById("white4");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;	
}
function cross() {
	 color = document.getElementsByClassName("cross");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].innerHTML = "<i class='fa fa-close'></i>";
	 }
	document.getElementById("total").innerHTML = text +	points;
	alert("GAME OVER!! your score = " +points)
	location.reload();
}
