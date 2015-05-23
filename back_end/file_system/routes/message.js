var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.get("Accept"));
  console.log(req.accepts('html', 'text/plain', 'json'));

  var payload = {
	"message" : "hello world",
	"author" : "Armand Delessert"
  }

	res.send(payload);
});

module.exports = router;
