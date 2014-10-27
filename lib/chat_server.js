var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('some_event_name', { hello: 'world'});
  socket.on('some_other_event_name', function (data) {
    console.log(data);
  });
});