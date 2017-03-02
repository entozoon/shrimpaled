let framesPerSecond = 60,
	t = 0,
	dt = 0,
	dtLog = new Log(100, 400),
	dtFactor = 0,
	dtSlip = 0;

dtLog.setSimple();

const time = () => {
	// Delta between renders
	dt = millis() - t;
	// Cap at 60fps (as it slips over somehow)
	if (dt < (1000 / framesPerSecond)) {
		dt = (1000 / framesPerSecond);
	}
	dtLog.add(dt);

	// Delta average (as it fluctuates like a motherflucker)
	//console.log(dtLog.getAverage());

	// Time since start
	t += dt;

	// I don't think these are as useful as I thought..
	/*
	// Delta as a factor (0 full speed, 0.5 half..)
	dtFactor = 1 - ((1000 / framesPerSecond) / dt); // 60 fps has minimum dt of 16.66
	*/

	dtSlip = dtLog.getAverage() - (1000 / framesPerSecond);
	if (dtSlip < 0) {
		dtSlip = 0;
	}
	//console.log(Math.round(dtSlip * 100) / 100);
};
