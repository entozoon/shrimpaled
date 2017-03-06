let game = {
		width: 200,
		height: 200
	},
	graphics,
	hero,
	foods = [];

window.onload = function() {
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
};

const preload = () => {
	// Images..
};

const create = () => {
	game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	game.scale.parentIsWindow = true;
	graphics = game.add.graphics(0, 0);

	for (let i = 0; i < 200; i++) {
		foods.push(new Food());
	}

	//console.log(game);
	setTimeout(function() {
		console.log('game: ' + game.width + ' x ' + game.height);
		console.log('game.world: ' + game.world.width + ' x ' + game.world.height);
	}, 1000);
};

const update = () => {
	foods.map(food => {
		food.update(dt);
	});
};

const render = () => {
	// Clear
	graphics.clear();

	// Bg
	graphics.beginFill(0xFFAA00, 1);
	graphics.drawRect(
		0,
		0,
		game.width,
		game.height
	);
	graphics.endFill();

	// Food
	foods.map(food => {
		food.render();
	});
	/*
	game.debug.geom(circle,'#cfffff');
	game.debug.text('Diameter : '+circle.diameter,50,200);
	game.debug.text('Circumference : '+circle.circumference(),50,230);
	*/
};


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
