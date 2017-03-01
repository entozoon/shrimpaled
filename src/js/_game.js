const setup = () => {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(60);
};

const mouseMoved = () => {
};
const touchMoved = () => {
};

const draw = () => {
	background(0);

	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 10, 10);
	noStroke();
};
