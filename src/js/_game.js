let hero,
	foods = [];

const setup = () => {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(frameRate);

	hero = new Hero();
	for (let i = 0; i < 200; i++) {
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
	time();

	hero.movementTest(t);

	background(0);

	foods.map(food => {
		food.update(dt);
		food.render();
	});

	hero.update(dt); // should this be in an interval.. or..
	hero.render();

	// Debugging
	fill(255, 255, 255);
	text('dt: ' + Math.round(dt), 10, 20);
	//text('dtFactor: ' + Math.round(dtFactor * 100) / 100, 10, 40);
	//text('dtSlip: ' + Math.round(dtSlip * 100) / 100, 10, 60);
};
