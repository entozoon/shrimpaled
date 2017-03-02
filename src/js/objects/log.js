class Log {
	constructor(limit) {
		this.log = [];
		this.limit = limit;
	}

	add(value) {
		this.log.push(value);
		// Pop the first
		if (this.log.length > this.limit) {
			this.log.splice(0, 1);
		}
	}

	getAverage() {
		let average = this.log.reduce((previous, accumulator) => {
			return previous + accumulator;
		});
		average /= this.log.length;
		return average;
	}

	getCurrent() {
		//return this.log.slice(-1);
		return this.getLog(this.getLength() - 1);
	}

	getLog(i) {
		if (i != null) {
			return this.log[i];
		} else {
			return this.log;
		}
	}

	getLength() {
		return this.log.length;
	}
}
