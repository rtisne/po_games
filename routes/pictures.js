var express = require('express')
var router = express.Router()
var Picture = require('../models/picture')
var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname.split('.')[file.originalname.split('.').length - 2] + '_' + file.fieldname + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
})

var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  onError: function (err, next) {
    console.log('error', err)
    next(err)
  }
})

router.post('/', [upload.any(), function (req, res) {
  if (req.files) {
    req.files.forEach(function (file) {
      try {
        Picture.addPicture(file, function (err, count) {
          if (err) {
            res.json(err)
          }
        })
      } catch (e) {
        return res.end()
      }
    })
  }
  res.json('ok')
}])

router.get('/', function (req, res) {
  var limit
  if (req.query.limit) {
    req.checkQuery('limit', 'Invalid postparam').notEmpty().isInt()
    var errors = req.validationErrors()
    if (errors) {
      res.send(errors)
      return
    } else {
      limit = req.query.limit
    }
  } else {
    limit = 6
  }
  try {
    Picture.getPictures(limit, function (err, row) {
      console.log(row)
      if (err) {
        res.json(err)
      } else {
        res.json(row)
      }
    })
  } catch (e) {
    return res.end()
  }
})

module.exports = router
