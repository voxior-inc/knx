/**
* knx.js - a KNX protocol stack in pure Javascript
* (C) 2016-2017 Elias Karakoulakis
*/

const util = require('util');
const dgram = require('dgram');
const WebSocket = require('ws');

function IpTunnelingConnectionWS(instance, options) {

  instance.BindSocket = function(cb) {
    const ws = new WebSocket('ws://'+instance.ipAddr+':'+instance.ipPort);

    ws.on('open', function() {
      cb(ws);
    });

    return ws;
  }

  instance.Connect = function() {
    var sm = this;
    this.localAddress = this.getLocalAddress();
    // create the socket
    this.socket = this.BindSocket(function(socket) {
      // socket.on("error", function(errmsg) {
      //   sm.debugPrint(util.format('Socket error: %j', errmsg));
      // });
      
      socket.send(JSON.stringify({username: options.auth.username, password: options.auth.password}))

      socket.on("message", function(msg, rinfo, callback) {
        if (typeof msg == 'string') {
          const msgObject = JSON.parse(msg);

          if (msgObject.auth != 'OK') {
            options.auth.errorCallback();
            return;
          }

          // start connection sequence
          sm.transition('connecting');
          return;
        }

        sm.debugPrint(util.format('Inbound message: %s', msg.toString('hex')));
        sm.onUdpSocketMessage(msg, rinfo, callback);
      });
      
    });
    return this;
  }

  instance.disconnected = function() {
    console.log('SOCKET DISCONNECTED!');
    this.socket.close();
  }

  return instance;
}


module.exports = IpTunnelingConnectionWS;
