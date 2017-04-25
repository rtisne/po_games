// include libraries
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// include routes
var members = require('./routes/members');
var results = require('./routes/results');

// include Model for token
var Token = require('./models/token');

// init express server
var app = express();

// parse request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// define and protect routes
app.use('/members', authentification);
app.use('/members', members);
app.use('/results', authentification);
app.use('/results', results);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
   return;
  });
}


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
   return;
});
module.exports = app;



// check token
function authentification(req, res, next) {
  var token = req.headers['x-access-token'];
  if (token) {
    Token.getGameForToken(token ,function(err,rows){
      if(err){
        return res.status(403).send({
            success: false,
            message: 'Err in database'
        });
      }
      else{
        if (typeof rows[0] !== 'undefined'){
          req.body.game = rows[0].game;
          next();
        }else {
          return res.status(403).send({
              success: false,
              message: 'Bad credentials'
          });
        }
      }
    });
  } else {
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
}
