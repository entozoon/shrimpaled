class Log {
	constructor(limit) {
		this.log = [];
		this.limit = limit;
		this.average = 0;
	}

	add(value) {
		this.log.push(value);
		// Pop the first
		if (this.log.length > this.limit) {
			this.log.splice(0, 1);
		}
	}

	calcAverage() {
		this.average = this.log.reduce((previous, accumulator) => {
			return previous + accumulator;
		});
		this.average /= this.log.length;
	}

	getAverage() {
		this.calcAverage();
		return this.average;
	}

	getCurrent() {
		return this.log.slice(-1);
	}
}
