const {performance} = require("perf_hooks");

function execute(parameter) {
	const {performance} = require('perf_hooks');

	function euclidean(a, b) {
		if(b != 0){
			let c = a % b;
			return euclidean(b, c);
		}
		return a;
	}
	function operateEuclidean(a, b, limit){
		let results = 0;

		for(let i = 1; i <= limit; i++){
			let newA = a * i;
			let newB = b * i;
			let results = euclidean(newA, newB);
		}
	}

	if(parameter){
		const startTime = performance.now();

		let arg1 = 922337203685460;
		let arg2 = 857214;
		let limit = parameter;
		operateEuclidean(arg1, arg2, limit);

		const endTime = performance.now();
		// return returnTime(endTime);
		return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
	}else{
		return -1;
	}
}
module.exports = { execute };
