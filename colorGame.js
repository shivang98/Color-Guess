var numberOfSquares = 6;
var colors = randomColorsGenerator(numberOfSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector('#message');
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	h1.style.background = "steelblue";
	numberOfSquares = 3;
	colors = randomColorsGenerator(numberOfSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberOfSquares = 6;
	h1.style.background = "steelblue";
	colors = randomColorsGenerator(numberOfSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

reset.addEventListener("click", function(){
	colors = randomColorsGenerator(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	this.textContent = "New Colors"
	for(var i=0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	h1.style.background = "steelblue";
	}
});

for(var i=0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		if (pickedColor == clickedColor) {
			message.textContent = "Correct";
			changeColor(pickedColor);
			reset.textContent = "Play Again?"
			document.querySelector("h1").style.background = pickedColor;
		}else{
			this.style.background = "#212833";
			message.textContent = "Try Again!"
		}
	});
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function randomColorsGenerator(num){
	var colors = []
	for (var i = 0; i < num; i++) {
		colors[i] = randomColor();
	}
	return colors;
}

function randomColor(){
	var r = random = Math.floor(Math.random()*256);
	var g = random = Math.floor(Math.random()*256);
	var b = random = Math.floor(Math.random()*256);
	return "rgb(" + r +", "+g +", "+b+ ")";
}