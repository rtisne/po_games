var pusher = module.exports = {}
var io
var Result = require('../models/result')
var Picture = require('../models/picture')
var DateLimit = require('../models/dateLimit')

pusher.initer = function (server) {
  io = require('socket.io')(server)
  io.on('connection', function (socket) {
    console.log('\x1b[33m%s\x1b[0m', '~~ New board connected!')
    console.log('\x1b[33m%s\x1b[0m', '~~~~ Board id : ' + socket.id)
    socket.on('dateLimit', function () {
      DateLimit.getDateLimit(function (err, rows) {
        if (!err) pusher.sendDate(socket, rows)
      })
    })
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

pusher.sendResult = function (data) {
  io.emit('newScore', data)
}

pusher.sendDate = function (socket, data) {
  socket.emit('dateLimit', data)
}
