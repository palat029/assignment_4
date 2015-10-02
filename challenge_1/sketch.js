

var flowerSize = 50;

function setup() {
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(20, 220, 220);
	fill(111, 187, 232);
	rect(0, 300, 640, 300);
	drawFlower(180, 200);
	drawFlower(200, 300);
	drawFlower(300, 350);
	for (var i = 0; i < 30; i++) {
		drawFlower(random (640), i * 4 + 180);

	}
	noLoop();
}


function drawFlower(x,y) {
	// stem
	strokeWeight(8);
	stroke(25,120, 60);
	line(x, y, x, y + 100);

	// outside ring
	noStroke();
	fill(255, 255, 255, 100);
	ellipse(x, y, flowerSize, flowerSize);


	// middle ring
	fill(255, 255, 255, 130);
	ellipse(x, y, flowerSize - 20, flowerSize - 20);

    // inside ring
	fill(250, 255, 255, 250);
	ellipse(x, y, flowerSize - 40, flowerSize - 40);



}
