var dgram = require('dgram');
var s = dgram.createSocket('udp4');
var os = require('os');
var ifaces = os.networkInterfaces();
var IP;

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      return;
    }
    if (alias >= 1) {
      console.log(ifname + ':' + alias, iface.address);
    } else {
      console.log(ifname, iface.address);
    }
	IP = iface.address;
  });
});


function sendInfo(FE, IP) {

	var that = this;

	this.FE = FE;
	this.IP = IP;
		
	
	sendInfo.prototype.update = function() {  
	 
	  var info = new Object();
	  info.FE = that.FE;
	  var PROTOCOL_PORT = 6666;
	  var PROTOCOL_MULTICAST_ADDRESS = "239.255.22.5";
	  info.IP = that.IP;
	  console.log(info.FE);
	  console.log(info.IP);
	  var payload = JSON.stringify(info);
	  message = new Buffer(payload);	
	  s.send(message, 0, message.length, PROTOCOL_PORT, PROTOCOL_MULTICAST_ADDRESS, function(err, bytes) {
	  	console.log("Sending payload: " + payload + " via port " + s.address().port);
	  });
	
	}
	setInterval(that.update, 2000);
	
}

var FE = true;
var t1 = new sendInfo(FE, IP);


