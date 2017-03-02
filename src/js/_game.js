let game,
	hero,
	foods = [];

window.onload = function() {
	gameStart = true;
	game = new Phaser.Game(
		game.width,
		game.height,
		//Phaser.AUTO,
		Phaser.CANVAS, // force canvas (as oppose to webgl, which fucks up on my home comp)
		'game',
		{
			preload: preload,
			create:  create,
			update:  update,
			render:  render
		},
		true // transparent
	);
}

const preload = () => {
	// Images..
}

const create = () => {
	circle = new Phaser.Circle(game.world.centerX, 100,64);
}

const update = () => {
}

const render = () => {
	game.debug.geom(circle,'#cfffff');
	game.debug.text('Diameter : '+circle.diameter,50,200);
	game.debug.text('Circumference : '+circle.circumference(),50,230);
}


/*
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
	text('avSlip: ' + Math.floor(dtLog.getAverage() - (1000 / framesPerSecond)), 10, 40);
	text('logRefIndex: ' + Math.round(hero.getLogRefIndex()), 10, 60);
	text('dtLog.getAverage: ' + Math.round(dtLog.getAverage()), 10, 80);
	//text('dtFactor: ' + Math.round(dtFactor * 100) / 100, 10, 40);
	//text('dtSlip: ' + Math.round(dtSlip * 100) / 100, 10, 60);
};
*/
