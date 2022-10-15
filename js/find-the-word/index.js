function execute(parameter) {
	const {performance} = require('perf_hooks');

	function findTheWord(word, fileName) {
		const fs = require("fs");
		let file = fs.readFileSync(fileName, "utf8");
		let arr = file.split(/\r?\n/);
		let count = 0;
		arr.forEach((line, idx) => {
			if (line.includes(word)) {
				count++;
			}
		});
		return count;
	}

	if (parameter) {
		const startTime = performance.now();

		let word = parameter;
		let fileName = __dirname + '/biblia-tysiaclecia_434mb.txt';

		let results = findTheWord(word, fileName);
		const endTime = performance.now();
		return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
	} else {
		return -1;
	}
}
module.exports = { execute };
