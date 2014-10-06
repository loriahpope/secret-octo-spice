var express = require('express');
var app = express();
var handlebars = require('express3-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public', express.static('public'));

app.get('/home', function(req, res){
	res.render('index',{
		name: 'World'
	});
});

app.get('/about', function(req, res){
	res.render('about');
});

var port = 3000;
app.listen(port);