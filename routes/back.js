var express = require('express')
var router = express.Router()
var Game = require('../models/game')
var Token = require('../models/token')

router.get('/', function (req, res, next) {
  Game.listGame(function (err, rows) {
    if (err) {
      res.json(err)
    } else {
      res.render('back/index', { message: 'Liste des jeux', games: rows})
    }
  })
})
router.get('/clients', function (req, res, next) {
  if (req.query.id) {
    Token.getTokenForGame(req.query.id, function (err, rows) {
      if (err) {
        res.json(err)
      } else {
        if (rows.length > 0) {
          var row = rows[0]
          res.render('back/clients', {token: row.token})
        } else {
          res.json(err)
        }
      }
    })
  } else {
    return res.end()
  }
})

module.exports = router
