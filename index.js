var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', function(action) {
	console.log(action);
	socket.broadcast.emit('message', action);
    });
    socket.on('disconnect', function(){
	console.log('user disconnected');
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000');
});
