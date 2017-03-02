let framesPerSecond = 60,
	t = 0,
	dt = 0,
	dtFactor = 0,
	dtSlip = 0;

const time = () => {
	// Delta between renders
	dt = millis() - t;
	// Cap at 60fps (as it slips over somehow)
	if (dt < (1000 / framesPerSecond)) {
		dt = (1000 / framesPerSecond);
	}

	// Time since start
	t += dt;

	// I don't think these are as useful as I thought..
	/*
	// Delta as a factor (0 full speed, 0.5 half..)
	dtFactor = 1 - ((1000 / framesPerSecond) / dt); // 60 fps has minimum dt of 16.66

	dtSlip = dt - (1000 / framesPerSecond);
	if (dtSlip < 0) {
		dtSlip = 0;
	}
	*/
};
