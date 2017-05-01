var pusher = module.exports = {}
var io
var Result = require('../models/result')
var Picture = require('../models/picture')

pusher.initer = function (server) {
  io = require('socket.io')(server)
  io.on('connection', function (socket) {
    console.log('\x1b[33m%s\x1b[0m', '~~ New board connected!')
    console.log('\x1b[33m%s\x1b[0m', '~~~~ Board id : ' + socket.id)
    // setInterval(function(){
    //   console.log('\x1b[33m%s\x1b[0m', '~~~~ Hydrating board...')
    //   Result.getResults(function (err, rows) {
    //     if (!err) pusher.hydrate(socket, rows)
    //   })
    // }, 5000)
    socket.on('clientRequestRefresh', function () {
      Result.getResults(function (err, rows) {
        if (!err) pusher.hydrate(socket, rows)
      })
    })

    socket.on('clientRequestShow', function (data) {
      if (typeof data !== 'undefined' && typeof data.countPictures !== 'undefined') {
        Picture.getPictures(data.countPictures, function (err, row) {
          if (!err) {
            pusher.requestShow(socket, row)
          } else {
            console.log('\x1b[33m%s\x1b[0m', "~~~~ Couldn't send pictures...")
          }
        })
      }
    })
  })
}

pusher.hydrate = function (socket, data) {
  socket.emit('hydrateClient', data)
}

pusher.requestShow = function (socket, data) {
  console.log('\x1b[33m%s\x1b[0m', '~~~~ Sending pictures array...')
  socket.emit('showClient', data)
}
