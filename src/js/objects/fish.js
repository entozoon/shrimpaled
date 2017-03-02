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
		/*
		// Pop the first bunch, depending on dt
		// i.e. if using a slow phone, pop a fuckload
		if (this.log.length > this.logLimit) {
			let popAmount = Math.ceil(dt * 0.5);
		if (this.log.length > this.logLimit) {
			let popAmount = Math.ceil(dt * 0.5);
			if (popAmount > this.log.length) {
				popAmount = this.log.length - 1;
			}
			console.log(popAmount);
			this.log.splice(0, popAmount);
		}
		*/
	}

	movementTest(t) {
		hero.setPosition({
			x: width  / 2 + Math.sin(t / 400) * width  / 3,
			y: height / 2 + Math.cos(t / 400) * height / 3
		});
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

		// Head
		fill(255, 255, 255);
		ellipse(this.position.x, this.position.y, 20, 20);
		noStroke();

		// Log reference point
		// If dt is low, we can look further in the past
		// (move this to update())
		let logRefIndex = Math.floor(dt/4);
		logRefIndex = constrain(logRefIndex, 0, this.log.length - 1);
		//console.log(logRefIndex);
		fill(255, 255, 0);
		ellipse(this.log[logRefIndex].x, this.log[logRefIndex].y, 20, 20);
		noStroke();
	}
}
