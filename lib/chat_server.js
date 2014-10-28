var createChat = function (server){
  // var io = socketio.listen(server);
  var socketio = require('socket.io')(server)

  socketio.sockets.on('connection', function (socket) {
    socket.emit('some_event_name', { hello: 'world' });
    socket.on('some_other_event_name', function (data) {
      console.log(data);
    });
  });
};

exports.createChat = createChat;