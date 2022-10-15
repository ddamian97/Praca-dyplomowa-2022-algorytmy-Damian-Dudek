function execute(parameter) {
	const {performance} = require('perf_hooks');

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	function fillTheArray(number) {
		let range = number;
		let newArray = new Array(number).fill(0);
		let randomNumber = 0;
		for (let i = 1; i <= range; i++) {
			do {
				randomNumber = Math.floor(Math.random() * range) + 1;
			}
			while (newArray.includes(randomNumber));
			newArray[i] = randomNumber;
		}
		return newArray;
	}

	if (parameter) {
		const startTime = performance.now();

		let array = fillTheArray(parameter);
		array.reduce(reducer);

		const endTime = performance.now();
		return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
	} else {
		return -1;
	}
}
module.exports = { execute };

