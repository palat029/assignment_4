// a simple p5 sketch that draws an ellipse
var xPositions = [];
var yPositions = [];
var ballSizes = [];

function setup() {
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
		ballSizes[i] = random(10, 30);
	}
}

function draw() {
	background(125, 0, 0);
	fill(0, 255, 255);
	noStroke();

	for (var i = 0; i < 10; i++){
		xPositions[i] = xPositions[i] + random(-2, 2);
		yPositions[i] = yPositions[i] + random(-2, 2);
		ellipse(xPositions[i], yPositions[i], ballSizes[i], ballSizes[i] );
	}
}
