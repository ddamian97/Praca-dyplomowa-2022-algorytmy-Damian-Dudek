const {performance} = require("perf_hooks");

function execute(parameter) {
	const {performance} = require('perf_hooks');

	function sieve(limit) {
		var bools = [];
		var primes = [];

		for (var i = 1; i < limit; i++) {
			bools.push(true);
		}

		for (var i = 2; i < limit; i++) {
			if (bools[i - 2]) {
				for (var j = i * 2; j <= limit; j += i) {
					bools[j - 2] = false;
				}
			}
		}

		for (var p = 0; p < bools.length; p++) {
			if (bools[p]) {
				primes.push(p + 2);
			}
		}
		return primes;
	}

	if (parameter) {
		const startTime = performance.now();

		let limit = parameter;
		let primesSieve = sieve(limit);
		let sum = primesSieve.reduce((a, b) => a + b, 0)

		const endTime = performance.now();
		// return returnTime(endTime);
		return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
	} else {
		return -1;
	}
}
module.exports = { execute };
