class Shrimp {
	constructor() {
		this.angle = Math.random() * 2 * Math.PI;
		this.speed = Math.random() * 0.001 + 0.01;
	}

	update(dt) {
		this.position.x += Math.sin(this.angle) * this.speed * dt;
		this.position.y += Math.sin(this.angle) * this.speed * dt;
	}

	render() {
		fill(255, 200, 200);
		ellipse(this.position.x, this.position.y, 10, 10);
		noStroke();
	}
	// Dude:
	// https://p5js.org/examples/hello-p5-flocking.html
}
