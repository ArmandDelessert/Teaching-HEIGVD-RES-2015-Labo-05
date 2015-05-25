var express = require('express');
var app = express();

var array = ['Raphael', 'Armand', 'Olivier', 'Simon'];

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({"studentname":array[Math.floor(Math.random() * 4)]}));
});

var server = app.listen(80, function () {
	var host = server.address().address;
	var port = server.address().port;
});