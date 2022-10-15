let http=require('http');
let url=require('url');
const fileName = '/index';
let server=http.createServer(function(req,res){
	// res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.header("Access-Control-Allow-Origin", "*");
	const headers = {
		'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
		'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
		'Access-Control-Max-Age': 2592000, // 30 days
		'Content-Type': 'text/plain'
		/** add other headers as per requirement */
	};
	res.writeHead(200, headers);

	console.log('starte');
	const pathName=url.parse(req.url).pathname;
	const queryObject = url.parse(req.url, true).query;
		switch(pathName){
			case '/fill-the-array':
				const fillTheArray = require("." + pathName + fileName);
				res.end(fillTheArray.execute(queryObject.value) + " ");
				break;
			case '/bisection':
				const bisection = require("." + pathName + fileName);
				res.end(bisection.execute(queryObject.value) + " ");
				break;
			case '/eratostenes':
				const eratostenes = require("." + pathName + fileName);
				res.end(eratostenes.execute(queryObject.value) + " ");
				break;
			case '/euclides':
				const euclides = require("." + pathName + fileName);
				res.end(euclides.execute(queryObject.value) + " ");
				break;
			case '/runge-kutta':
				const rungeKutta = require("." + pathName + fileName);
				res.end(rungeKutta.execute(queryObject.value) + " ");
				break;
			case '/find-the-word':
				const findTheWord = require("." + pathName + fileName);
				res.end(findTheWord.execute(queryObject.value) + " ");
				break;
			case '/count-the-lines':
				const countTheLines = require("." + pathName + fileName);
				res.end(countTheLines.execute(queryObject.value) + " ");
				break;
			default:
				res.end('-1');
				break;
		}
}).listen(9879);
// }).listen();
