
var PROTOCOL_PORT = 6666;
var PROTOCOL_MULTICAST_ADDRESS = "239.255.22.5";
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.bind(PROTOCOL_PORT, function() {
  console.log("Joining multicast group");
  s.addMembership(PROTOCOL_MULTICAST_ADDRESS);
});

// apeler quand un datagrame arrive
s.on('message', function(msg, source) {
	console.log("Data has arrived: " + msg + ". Source port: " + source.port);
	var arr_from_json = JSON.parse( msg );
	console.log(arr_from_json.FE);
	console.log(arr_from_json.IP);
});

