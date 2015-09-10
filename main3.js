'use strict';
const http = require('http');
const wordData = require('./wordCounter.js');
const mdn5 = require('md5');
const math = require('./math.js');
const PORT = 8000;
let fun, answer;
const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	// fun = req.url.split('/');
	if ( /\/math/.test(req.url)) {
		// switch(true) {
		// 	case /\/add\/\d+/.test(req.url) : 
		// 	answer = (parseFloat(fun[3]) + parseFloat(fun[4]));
		// 	break;
		// 	case /\/subtract\/\d+/.test(req.url) : 
		// 	answer = (parseFloat(fun[3]) - parseFloat(fun[4]));
		// 	break;
		// 	case /\/multiply\/\d+/.test(req.url) : 
		// 	answer = (parseFloat(fun[3]) * parseFloat(fun[4]));
		// 	break;
		// 	case /\/divide\/\d+/.test(req.url) : 
		// 	answer = (parseFloat(fun[3]) / parseFloat(fun[4]));
		// 	break;
		// 	default :
		// 	res.end("What? Don't you want to do some math?");
		// }
			res.end(math());
	}
	if (/\/words/.test(req.url)) {
		let sen = decodeURI(fun[2]);
		sen = sen.replace(/[^a-zA-Z\s]/g, '');
		let wordCounter = wordData(sen);
		res.end(wordCounter);
	}
	if (/\/gravatarUrl/.test(req.url)){
		let gravatar = "http://gravatar.com/avatar/" + (mdn5(fun[2])).toString();
		let html = "<img src='"+gravatar+"'></img>"
		res.setHeader("Content-Type", "text/html");
		res.end(html);
		// res.end(gravatar);
		// res.writeHead(302, {
		// 		'Location' : gravatar
		// 	});
		// 	res.end('Redirect');
	}
});

server.listen(PORT, function(){
	console.log('server now listening on port ' + PORT + ' ! ;)')
});
