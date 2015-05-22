var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('BE');
  var ip = "<?php echo $_SERVER['SERVER_ADDR']; ?>";
  res.send(ip);
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});