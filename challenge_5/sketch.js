// remember where the ball is
var ballX = 0;
var ballY = 0;

function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	/////// first way start
	// // clear the background
	// background(150, 150, 50);
	// if (mouseIsPressed) {
	// 	// down or clicked
	// 	ellipse(ballX, ballY, 50, 50);
	// } else {
	// 	// up or not pressed
	// 	ellipse(mouseX, mouseY, 50, 50);
	// 	ballX = mouseX;
	// 	ballY = mouseY;
	// }
	//////////// first way end

	//// second way start
	background(250, 550, 110);
	if (mouseIsPressed === false) {
		ballX = mouseX;
		ballY = mouseY;
	}
	stroke(255, 255, 255);
	strokeWeight(8);
	line(mouseX, mouseY, ballX, ballY);

	fill(255, 255, 255);
	stroke(0, 20, 250);
	ellipse (ballX, ballY, 50, 50);
	ellipse (mouseX, mouseY, 50, 50);


  //// second way end

}
