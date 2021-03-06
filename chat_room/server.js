var express = require('express');
var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 8000);
console.log('server is running at port number 8000')

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})
io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    //Disconnect
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
})