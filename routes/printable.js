/**
 * Created by rtisne on 06/06/2017.
 */
var express = require('express')
var router = express.Router()
var Picture = require('../models/picture')

router.get('/', function (req, res, next) {
  Picture.getPicturesSession(function (err, rows) {
    if (err) {
      res.json(err)
    } else {
      res.render('printable/index', {pictures: rows})
    }
  })
})
router.get('/session', function (req, res, next) {
  if (req.query.id) {
    Picture.getPicturesFromSession(req.query.id, function (err, rows){
      if (err) {
        res.json(err)
      } else {
        rows.forEach(function (element) {
          var imgName = ''
          switch (element.path.split('_')[0].split('\\')[2]) {
            case 'colere':
              imgName = 'Angry.png'
              break
            case 'joie':
              imgName = 'Smiling.png'
              break
            case 'neutre':
              imgName = 'Neutral.png'
              break
            case 'surprise':
              imgName = 'Surprised.png'
              break
            case 'tristesse':
              imgName = 'Crying.png'
              break
            case 'peur':
              imgName = 'Fear.png'
              break
            case 'degout':
              imgName = 'disgust.png'
              break
            default:
              imgName = 'disgust.png'
              break
          }
          element.smiley = imgName
        })
        res.render('printable/session', {pictures: rows})
      }
    })
  } else {
    return res.end()
  }
})

module.exports = router