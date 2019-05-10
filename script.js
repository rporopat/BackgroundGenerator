var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

setGradient();
randomColor();

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";

	randomButton.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

function randomColor() {
  	var rColor1 = "#";
  	var rColor2 = "#";
	for(var i = 0; i < 6; i++){
      rColor1 += Math.floor((Math.random() * 16)).toString(16);
	}
	for(var i = 0; i < 6; i++){
      rColor2 += Math.floor((Math.random() * 16)).toString(16);
	}
  	body.style.background = "linear-gradient(to right, " 
	+ rColor1
	+ ", " 
	+ rColor2 
	+ ")";
	color1.value = rColor1;
	color2.value = rColor2;

	randomButton.style.background = "linear-gradient(to right, " 
	+ rColor1
	+ ", " 
	+ rColor2 
	+ ")";
}

color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColor);