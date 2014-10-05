var express = require('express');
var app = express();
var path = require("path");
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//Handlebars
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.get('/', function(req, res){
res.render('index', greeting);
	res.send('hello');
});

app.get('/about', function(req, res) {
	res.send('you has q, i has answer');
});

//listen on port 3000
app.listen(3000);
console.log('Started server on port 3000');