class Log {
	constructor(limitMin, limitMax) {
		this.log = [];
		this.limitMin = limitMin;
		this.limitMax = limitMax;
	}

	setSimple() {
		this.simple = true;
	}

	add(value) {
		this.log.push(value);

		if (this.simple) {
			// Pop the first
			if (this.log.length > this.limitMax) {
				this.log.splice(0, 1);
			}
			return;
		}

		// Pop the first bunch, depending on dt
		// i.e. if using a slow phone, pop a fuckload
		//let dtSlip = dtLog.getAverage() - (1000 / framesPerSecond);
		let popAmount = Math.round(dtSlip * 1);

		if (this.getLength() > this.limitMax) {
			popAmount = constrain(popAmount, 1, this.getLength() - 1); // 1 -> ?
		} else {
			popAmount = constrain(popAmount, 0, this.getLength() - 1); // 0 -> ?
		}

		console.log('popAmount: ' + popAmount + ' dtSlip: ' + dtSlip);

		if (this.getLength() > this.limitMin) {
			this.log.splice(0, popAmount);
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
