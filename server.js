var http = require('http'),
	fs = require('fs');
var port = 3000;
http.createServer(handleRequest).listen(port);
console.log('Started server on port', port);

function serveStatic(res, path, contentType, resCode) {
	fs.readFile(path, function(err, data) {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' }); 
			res.end('500 - Internal Error');
		} else {
			res.writeHead(resCode, { 'Content-Type': contentType}); 
			res.end(data);
		}
	});
}

function handleRequest(req, res) {
	var d = new Date();
	var n = d.toLocaleString();
	var resCode, 
		body,
		headers = {'Content-Type':'text/html'};

	if (req.url.toLowerCase() === '/' || req.url.toLowerCase() === '/home'.toLowerCase() || req.url.toLowerCase() === '/home/'.toLowerCase()) {
		resCode = 200;
		serveStatic(res, 'test/index.html', 'text/html', resCode);
		console.log("Date: " + n + "\nGET " + req.url + "\nresponse code: " + resCode);
	} else if (req.url.toLowerCase() === '/about' || req.url.toLowerCase() === '/about/'){
		resCode = 200;
		serveStatic(res, 'test/about.html', 'text/html', resCode);
		console.log("Date: " + n + "\nGET " + req.url + "\nresponse code: " + resCode);
	} else if (req.url.toLowerCase() === '/me' || req.url.toLowerCase() === '/me/'){
		 resCode = 301;
		 res.setHeader('Content-Type', 5 , 'text/html');
		 serveStatic(res, 'test/about.html', 'text/html', resCode);
		 console.log("Date: " + n + "\nGET " + req.url + "\nresponse code: " + resCode);
	} else if (req.url.toLowerCase() === '/images/image1.png' || req.url.toLowerCase() === '/images/image1.png/'){
		resCode = 200;
		serveStatic(res, 'test/images/image1.png', 'image/png', resCode);
		console.log("Date: " + n + "\nPOST " + req.url + "\nresponse code: " + resCode);
	} else if (req.url.toLowerCase() === '/images/image2.png' || req.url.toLowerCase() === '/images/image2.png/'){
		resCode = 200;
		serveStatic(res, 'test/images/image2.png', 'image/png', resCode);
		console.log("Date: " + n + "\nPOST " + req.url + "\nresponse code: " + resCode);
	} else if (req.url.toLowerCase() === '/css/test.css' || req.url.toLowerCase() === '/css/test.css/'){
		resCode = 200;
		serveStatic(res, 'test/css/test.css', 'text/css', resCode);
		console.log("Date: " + n + "\nPOST " + req.url + "\nresponse code: " + resCode);
	} else {
		resCode = 404;
		serveStatic(res, 'test/404.html', 'text/html', resCode);
		console.log("Date: " + n + "\nPOST " + req.url + "\nresponse code: " + resCode);
	}

	console.log(res.sendDate);
}
