var pusher = module.exports = {};

pusher.initer = function(server){

    var io = require('socket.io')(server);
    io.on('connection', function (socket) {
        console.log("Board connected")


        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });

}

