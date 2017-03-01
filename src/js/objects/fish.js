class Fish {
	constructor() {
		this.position = {
			x: Math.random() * width,
			y: Math.random() * height
		}
	}

	setPosition(position) {
		this.position = position;
	}

	update() {
	}

	render() {
		fill(255, 255, 255);
		ellipse(this.position.x, this.position.y, 10, 10);
		noStroke();
	}
}
