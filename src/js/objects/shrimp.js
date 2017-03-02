class Shrimp {
	constructor() {
		this.angle = Math.random() * 2 * Math.PI;
		this.speed = Math.random() * 0.01 + 0.005;
	}

	update(dt) {
		this.position.x += Math.sin(this.angle) * dt * this.speed;
		this.position.y += Math.sin(this.angle) * dt * this.speed;
	}

	render() {
		fill(255, 200, 200);
		ellipse(this.position.x, this.position.y, 10, 10);
		noStroke();
	}
	// Dude:
	// https://p5js.org/examples/hello-p5-flocking.html
}
