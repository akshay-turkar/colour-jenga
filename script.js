let color = "";
let len = 0;
let i = 0;
var points = 0;
const text = "Total:";
let o = g = v = a = y = p = w1 = w2 = w3 = 1; 
function orange() {
	
	if(o === 1)
	{
	 color = document.getElementsByClassName("orange");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#ff6600";
	 	points += 5;
	 }
	 document.getElementById("total").innerHTML = text +	points;
	 o++;
	}
}

function green() {
	
	if(g === 1)
	{
	color = document.getElementsByClassName("green");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#00ff00";
	 	points += 7;
	 }
	 document.getElementById("total").innerHTML = text +	points;
	 g++;
	} 
}

function voilet() {
	
	if(v === 1){
		color = document.getElementsByClassName("voilet");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#5200cc";
	 	points += 8;
	 }
	 document.getElementById("total").innerHTML = text +	points;
	 v++;
	} 
}
function aqua() {
	
	if(a === 1){
	 color = document.getElementsByClassName("aqua");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#00ffff";
	 	points += 15;
	 }
	 document.getElementById("total").innerHTML = text +	points;
	 a++;
	}
}

function pink() {
	
	if(p === 1){
	 color = document.getElementsByClassName("pink");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#ff4dff";
	 	points += 5;
	 }
	 document.getElementById("total").innerHTML = text +	points;
	 p++;
	}
}
function yellow() {
	
	if(y === 1){
	 color = document.getElementsByClassName("yellow");
	 len = color.length;
	 for(i=0; i<len ; i++){
	 	color[i].style.background = "#ffff00";
	 	points += 10;
	 }
	 document.getElementById("total").innerHTML = text +	points;
	 y++;
	}
}
function white1() {
	
	if(w1 === 1){
	color = document.getElementById("white1");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;
	w1++;	
	}
}
function white2() {
	w2 = 1;
	if(w2 === 1){
	color = document.getElementById("white2");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;
	 w2++;	
	}
}
function white3() {
	
	if(w3 === 1){
	color = document.getElementById("white3");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;	
	}
	w3++;
}
function white4() {
	
	if(w4 === 1){
	color = document.getElementById("white4");
	color.style.background = "#ffffff";
	points += 25;
	document.getElementById("total").innerHTML = text +	points;
	 w4++;	
	}
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
