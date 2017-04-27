var express = require('express')
var expressValidator = require('express-validator')
var router = express.Router()
var Result = require('../models/result')
var Game = require('../models/game')

router.post('/', function (req, res, next) {
  try {
    Game.getGame(req.body.game, function (err, rows) {
      if (err) {
        res.json(err)
      } else {
        if (rows.length > 0) {
          var row = rows[0]
          try {
            req.checkBody('member', 'Invalid postparam').notEmpty().isInt()
            req.checkBody('score', 'Invalid postparam').notEmpty().isInt()
            var errors = req.validationErrors()
            if (errors) {
              res.send(errors)
              return
            } else {
              if (req.body.score < row.min || req.body.score > row.max) {
                var result = {code: 100, message: 'Le résultat doit être entre ' + row.min + ' et ' + row.max}
                res.json(result)
              }
              req.body.score = normalization(req.body.score, row.min, row.max)
              Result.addResult(req.body, function (err, count) {
                if (err) {
                  var result = {code: err.code, message: 'Resultat déjà existant'}
                  res.json(result)
                } else {
                  res.json(req.body)
                }
              })
            }
          } catch (e) {
            return res.json(e)
          }
        }
      }
    })
  } catch (e) {
    return res.end()
  }
})

router.put('/', function (req, res, next) {
  try {
    Game.getGame(req.body.game, function (err, rows) {
      if (err) {
        res.json(err)
      } else {
        if (rows.length > 0) {
          var row = rows[0]
          try {
            req.checkBody('member', 'Invalid postparam').notEmpty().isInt()
            req.checkBody('score', 'Invalid postparam').notEmpty().isInt()
            var errors = req.validationErrors()
            if (errors) {
              res.send(errors)
              return
            } else {
              if (req.body.score < row.min || req.body.score > row.max) {
                var result = {code: 100, message: 'Le résultat doit être entre ' + row.min + ' et ' + row.max}
                res.json(result)
              }
              req.body.score = normalization(req.body.score, row.min, row.max)
              Result.updateResult(req.body, function (err, count) {
                if (err) {
                  res.json(err)
                } else {
                  res.json(req.body)
                }
              })
            }
          } catch (e) {
            return res.json(e)
          }
        }
      }
    })
  } catch (e) {
    return res.end()
  }
})

router.get('/', function (req, res, next) {
  try {
    Result.getResults(function (err, rows) {
      if (err) {
        res.json(err)
      } else {
        res.json(rows)
      }
    })
  } catch (e) {
    return res.end()
  }
})

function normalization (value, min, max) {
  var result = Math.round(((value - min) / (max - min)) * 100 * 100) / 100
  return result
}

module.exports = router
