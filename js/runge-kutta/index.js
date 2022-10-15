function execute(parameter) {
	const {performance} = require('perf_hooks');

	function RungeKutta(t, h, v, g, step, steps){
		let prevV = v;
		let prevH = h;

		for(let i = 0; i < steps; i++){
			h = prevH + prevV * step;
			v = prevV - g * step;
			prevH = h;
			prevV = v;
		}
		return [h, v];
	}

	if(parameter){
		const startTime = performance.now();

		let height0 = 56.0;
		let velocity0 = 5.6;
		let step = 0.00000001;
		let steps = parameter;
		let g = 9.81;
		let time0 = 0;
		RungeKutta(time0, height0, velocity0, g, step, steps);

		const endTime = performance.now();
		// return returnTime(endTime);
		return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
	}else{
		return -1;
	}
}
module.exports = { execute };
