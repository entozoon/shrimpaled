class Fish {
	constructor() {
		this.position = {}; // always current
		this.log = new Log(20, 100);
		this.logRefIndex = 0;
	}

	setPosition(position) {
		this.position = position;
	}

	getLogRefIndex() {
		return this.logRefIndex;
	}

	update(dt) {
		this.log.add(this.position);
	}

	movementTest(t) {
		hero.setPosition({
			x: width  / 2 + Math.sin(t / 400) * width  / 3,
			y: height / 2 + Math.cos(t / 400) * height / 3
		});
	}

	render() {
		/*
		// Debugs
		fill(255, 0, 255);
		this.log.getLog().map(position => {
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
		*/




		// Log reference point
		// If dt is low, we can look further in the past
		// (move this to update())
		/*
		this.logRefIndex = Math.floor(dt/4);
		this.logRefIndex = constrain(this.logRefIndex, 0, this.log.length - 1);
		//console.log(this.logRefIndex);
		fill(255, 255, 0);
		ellipse(this.log[this.logRefIndex].x, this.log[this.logRefIndex].y, 20, 20);
		noStroke();
		*/

		/*
		fill(255, 255, 0);
		ellipse(this.log.getLog(0).x, this.log.getLog(0).y, 20, 20);
		noStroke();
		*/


		/*
		let averageSlipFromNoLag = Math.floor(dtLog.getAverage() - (1000 / framesPerSecond));

		// Use the first item in array (oldest)
		// but as it starts to lag, get a more recent one
		this.logRefIndex = averageSlipFromNoLag * 2;

		this.logRefIndex = Math.floor(averageSlipFromNoLag);

		// Limit to using 5th most recent, as 0 would be fucky
		this.logRefIndex = constrain(this.logRefIndex, 5, this.log.getLength() - 1);

		// Might not exist in first few seconds
		if (this.logRefIndex < this.log.getLength()) {
			//console.log(this.logRefIndex);
			fill(255, 255, 0);
			ellipse(this.log.getLog(this.logRefIndex).x, this.log.getLog(this.logRefIndex).y, 20, 20);
			noStroke();
		}
		*/
	}
}
