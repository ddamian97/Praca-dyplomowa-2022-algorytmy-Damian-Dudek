function execute(parameter) {
	const {performance} = require('perf_hooks');
	function countTheLines(fileName){
		const fs = require('fs');
		var text = fs.readFileSync(fileName).toString();
		var lines = text.split('\n');
		var numberOfLines = lines.length - 1;

		return numberOfLines;
	}
	if (parameter) {
		const startTime = performance.now();

		let fileName = __dirname + '/' + parameter;

		let results = countTheLines(fileName);

		const endTime = performance.now();
		return '{ "time": "' + (Math.floor(endTime - startTime)) + '" }';
	}else{
		return -1;
	}
}
module.exports = { execute };
