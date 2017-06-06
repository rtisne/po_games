// include libraries
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')
// include routes
var members = require('./routes/members')
var results = require('./routes/results')
var pictures = require('./routes/pictures')

var back = require('./routes/back')
// include Model for token
var Token = require('./models/token')

// init express server
var app = express()

// parse request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, '/public/views'))
app.set('view engine', 'pug')
app.use('/board', express.static('/public/board'))

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'))
app.use('/public', express.static(__dirname + '/public'))
app.use('/images', express.static(__dirname + '/public/board/images'))

// define and protect routes
app.use('/api/members', authentification)
app.use('/api/members', members)
app.use('/api/results', authentification)
app.use('/api/results', results)
app.use('/api/pictures', pictures)

app.use('/', back)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
  })
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: err
  })
})
module.exports = app

// check token
function authentification (req, res, next) {
  var token = req.headers['x-access-token']
  if (token) {
    Token.getGameForToken(token, function (err, rows) {
      if (err) {
        return res.status(403).send({
          success: false,
          message: 'Err in database'
        })
      } else {
        if (typeof rows[0] !== 'undefined') {
          req.body.game = rows[0].game
          next()
        } else {
          return res.status(403).send({
            success: false,
            message: 'Bad credentials'
          })
        }
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
}
