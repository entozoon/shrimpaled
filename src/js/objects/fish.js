class Fish {
	constructor() {
		this.position = {};
	}

	setPosition(position) {
		this.position = position;
	}

	update() {
	}

	render() {
		fill(255, 255, 255);
		ellipse(this.position.x, this.position.y, 20, 20);
		noStroke();
	}
}
