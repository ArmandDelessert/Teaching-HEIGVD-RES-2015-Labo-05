
//doc here : https://www.npmjs.com/package/heartbeats

var heartbeats = require('heartbeats');
var heart = heartbeats.createHeart(5000);


function sendInfo()
{
	var PROTOCOL_MULTICAST_ADDRESS = "239.255.22.5";
	var PROTOCOL_PORT = 6666;
	var buffer = "FE ";
	var ip = "<?php echo $_SERVER['SERVER_ADDR']; ?>";
	buffer = message + ip
	var message = new Buffer(buffer);

	var client = dgram.createSocket("udp4");
	client.bind();
	client.on("listening", function () {
		client.setBroadcast(true);
		client.send(message, 0, message.length, PROTOCOL_PORT, PROTOCOL_MULTICAST_ADDRESS, function(err, bytes) {
			client.close();
		});
	});
}



//tout les battement nous envoyons les infos FE (pour front end) et l'ip de la machine
heart.createEvent(1, function(heartbeat, last){
	sendInfo();
});