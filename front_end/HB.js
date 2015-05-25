
//doc here : https://www.npmjs.com/package/heartbeats

var heartbeats = require('heartbeats');
var heart = heartbeats.createHeart(5000);
var payload = "I'M ALIVE";
var HOWIM = "FRONTEND";


heart.createEvent(1, function(heartbeat, last){
  console.log("Toutes les 5 sec j'envoi le im alive");
});


function sendInfo()
{
	var broadcastAddress = "192.168.0.255";

	var message = new Buffer("I'M ALIVE");

	var client = dgram.createSocket("udp4");
	client.bind();
	client.on("listening", function () {
		client.setBroadcast(true);
		client.send(message, 0, message.length, 6623, broadcastAddress, function(err, bytes) {
			client.close();
		});
	});
}