


var dgram = require('dgram');
var s = dgram.createSocket('udp4');
var os = require('os');
var ifaces = os.networkInterfaces();
var IP;


Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0
    ;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
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

var FE = false;

var t1 = new sendInfo(FE, IP);


