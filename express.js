//require express module
var express = require('express');

//create express app
var app = express();

//allows and file in teh public directory of teh project to be served as a static file
var path = require("path");

var publicPath = path.resolve(__dirname, "public");

//does not have to be public
app.use(express.static(publicPath));

//bring in handlebars
var handlebars = require('express3-handlebars') 
	.create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



//bind a callback to a url
app.get('/', function(req, res){
res.render('index', greeting);
	//send back a response
	res.send('hello');
});

app.get('/faq', function(req, res) {
	res.send('you has q, i has answer');
});

//listen on port 3000
app.listen(3000);
console.log('Started server on port 3000');