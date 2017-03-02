class Fish {
	constructor() {
		this.position = {}; // always current
		this.log = [];
		this.logLimit = 100;
	}

	setPosition(position) {
		this.position = position;
	}

	update(dt) {
		this.log.push(this.position);
		// Pop the first
		if (this.log.length > this.logLimit) {
			this.log.splice(0, 1);
		}
	}

	render() {
		// Debugs
		fill(255, 0, 255);
		this.log.map(position => {
			ellipse(position.x, position.y, 10, 10);
			noStroke();
		});

		// Head
		fill(255, 255, 255);
		ellipse(this.position.x, this.position.y, 20, 20);
		noStroke();
	}
}
