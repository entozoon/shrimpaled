let hero,
	foods = [];

const setup = () => {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(60);

	hero = new Hero();
	for (let i = 0; i < 20; i++) {
		foods.push(new Food());
	}
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

	foods.map(food => {
		food.render();
	});

	hero.update();
	hero.render();
};
