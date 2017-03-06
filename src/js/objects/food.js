class Food extends Shrimp {
	constructor() {
		super();
		this.object = new Phaser.Circle(
			Math.random() * game.width,
			Math.random() * game.height,
			Math.floor(Math.random() * 10 + 5) // diameter
		);
		this.angle = Math.random() * 2 * Math.PI;
	}

	update(dt) {
		this.object.x += Math.sin(this.angle);
		this.object.y += Math.cos(this.angle);
	}

	render() {
		//game.debug.geom(this.object, '#dddddd');
		graphics.beginFill(0xFF0000, 1);
		graphics.drawCircle(
			this.object.x,
			this.object.y,
			this.object.diameter
		);
	}
	// Dude:
	// https://p5js.org/examples/hello-p5-flocking.html
}
