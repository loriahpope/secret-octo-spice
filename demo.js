var http = require('http'),
	fs = require('fs'),
	port = 3000;

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

	var date = new Date();
	var timeStamp = date.toLocaleString();

	var target = req.url.toLowerCase();

	if(target === "/" || target === "/home" || target === "/home/"){
		res.status = 200;
		serveStatic(res, 'public/index.html', 'text/html', res.status);
	} else if(target === "/about" || target === "/about/"){
		res.status = 200;
		serveStatic(res, 'public/about.html', 'text/html', res.status);
	} else if(target === "/me"){
		res.status = 301;
		//console.log(timeStamp, req.method, req.url, res.status, http.STATUS_CODES[res.status]);
		res.writeHead(res.status, {"location":"about"});
		res.end();
	} else if(target === "/img/image1.png"){
		res.status = 200;
		serveStatic(res, 'public/images/image1.png', 'image/png', res.status);
	} else if(target === "/img/image2.png"){
		res.status = 200;
		serveStatic(res, 'public/images/image2.png', 'image/png', res.status);
	} else if(target === "/css/base.css"){
		res.status = 200;
		serveStatic(res, 'public/css/base.css', 'text/css', res.status);
	} else {
		res.status = 404;
		serveStatic(res, 'public/404.html', 'text/html', res.status);
	}

	console.log(timeStamp, req.method, req.url, res.status, http.STATUS_CODES[res.status]);
};