class Food extends Shrimp {
	constructor() {
		super();
		this.position = {
			x: Math.random() * width,
			y: Math.random() * height
		}
	}
	// Dude:
	// https://p5js.org/examples/hello-p5-flocking.html
}
