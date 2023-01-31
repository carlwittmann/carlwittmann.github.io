var COLOR_01 = [178, 30, 93]; // pink
var COLOR_02 = [42, 178, 48]; // green
var COLOR_03 = [110, 255, 116]; // light green
var COLOR_04 = [0, 0, 40]; // gray

function setup() {
	var size = 800;
	createCanvas(size, size);
	background.apply(null, COLOR_04);
	noLoop();
	stroke(255);
	angleMode(DEGREES);
}

function draw() {
	translate(width/2, height/2);
	rotate(45/2);
	branchComponent(100, 8, 60);
}

function branch(len, angle, gen) {
	line(0, 0, 0, -len);
	translate(0, -len);
	len *= 0.7;
	angle = random(angle-30, angle+20);

	if (len > 2) {
		push();
		rotate(angle);
		branch(len, angle, gen);
		pop();

		push();
		rotate(-angle);
		branch(len, angle, gen);
		pop();
	}
}

function branchComponent(len, amount, angle) {
	stroke.apply(null, COLOR_01);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}
