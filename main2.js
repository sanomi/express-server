var http = require('http');
var fs = require('fs');
var url = require('url');
var request = require('request');

var PORT = 8000;

// request('http://api.wunderground.com/api/a741b0d8e5cdb448/tide/q/CA/San_Francisco.json', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body)  
//   }
// })

var server = http.createServer(function(req, res) {
	var req = url.parse(req.url, true);
  var action = req.pathname;

  // if (action == '/pic.png') {
  //    var img = fs.readFileSync('./pic.png');
  //    res.writeHead(200, {'Content-Type': 'image/gif' });
  //    res.end(img, 'binary');
  // } 
  if (action == '/package.json') {
     var pkg = fs.readFileSync('./package.json');
     res.writeHead(200, {'Content-Type': 'json' });
     res.end(pkg, 'binary');
  } else { 
     res.writeHead(200, {'Content-Type': 'text/plain' });
     res.end('Hello World \n');
  }

		// switch(req.url) {
		// 	case '/weather' :
		// 		request('http://api.wunderground.com/api/a741b0d8e5cdb448/tide/q/CA/San_Francisco.json',
		// 			function(error, response, body) {
		// 				console.log(error);
		// 				console.log(Object.keys(response));
		// 				console.log(body);
		// 				res.end(body);
		// 			});
		// 		break;
		// 	case '/ainthere':
		// 	res.statusCode = 404;
		// 	res.write('You will be 404ever looking for this page.');
		// 	res.end();
		// 	break;
		// 	case '/redirect' :
		// 	res.writeHead(302, {
		// 		'Location' : 'http://google.com'
		// 	});
		// 	res.end('Redirect');
		// 	break;
		// default :
		// 	res.end('Hey there sexy! Ever heard of teledildonics?')
		// }
});

server.listen(PORT, function(){
	console.log('server now listening on port ' + PORT + ' ! ;)')
});
