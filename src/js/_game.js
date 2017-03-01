let hero;

const setup = () => {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(60);

	hero = new Hero();
};

const mouseMoved = () => {
	hero.setPosition({
		x: mouseX,
		y: mouseY
	});
};

const touchMoved = () => {
	hero.setPosition({
		x: mouseX,
		y: mouseY
	});
};

const draw = () => {
	background(0);

	hero.update();
	hero.render();
};
