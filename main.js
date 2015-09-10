'use strict';
const http = require('http');
const wordData = require('./wordCounter.js');
const mdn5 = require('md5');
const math = require('./math.js');
const gravatar = require('./gravatar.js');
const PORT = 8000;
let express = require('express');
let app = express();
let fun, answer;
app.get('/math/*', (req,res,next) => {
	math(req, res, next);
});
app.get('/words/*', (req,res,next) => {
	res.end(wordData(req, res, next, fun));
});
app.get('/gravatarUrl/*', (req,res,next) => {
	res.end(gravatar(req, res));
});
app.get('/', (req,res,next) => {
		res.statusCode = 200;
	fun = req.url.split('/');
})
app.listen(PORT, function(){
	console.log('server now listening on port ' + PORT + ' ! ;)')
});
