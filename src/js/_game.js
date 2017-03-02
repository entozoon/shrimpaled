let t = 0,
	dt = 0,
	hero,
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
	dt = millis() - t;
	t += dt;
	//console.log(Math.round(dt) + ' / ' + Math.round(t) + 'ms');

	background(0);

	foods.map(food => {
		food.update(dt);
		food.render();
	});

	hero.update(dt); // should this be in an interval.. or..
	hero.render();
};
