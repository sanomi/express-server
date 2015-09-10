'use strict';
let math = (req, res) => {
	let answer;
	let fun = req.url.split('/');
	switch(true) {
			case /\/add\/\d+/.test(req.url) : 
			answer = (parseFloat(fun[3]) + parseFloat(fun[4]));
			break;
			case /\/subtract\/\d+/.test(req.url) : 
			answer = (parseFloat(fun[3]) - parseFloat(fun[4]));
			break;
			case /\/multiply\/\d+/.test(req.url) : 
			answer = (parseFloat(fun[3]) * parseFloat(fun[4]));
			break;
			case /\/divide\/\d+/.test(req.url) : 
			answer = (parseFloat(fun[3]) / parseFloat(fun[4]));
			break;
			default :
			answer = 0;
			res.end("What? Don't you want to do some math?");
		}
			return (res.end( answer.toString() ) );
}

module.exports = math;