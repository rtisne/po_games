var express = require('express');
var router = express.Router();
var Picture = require('../models/picture');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
})

var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  onError : function(err, next) {
        console.log('error', err);
        next(err);
      }
  });


router.post('/', [upload.any(), function(req, res) {
  if(req.files.length > 0){
    var file = req.files[0];
    try{
        Picture.addPicture(file,function(err,count){
          if(err){
            res.json(err);
          } else{
            res.json(file);
          }
        });
    } catch(e){
        return res.end();
    }
  }
}]);


module.exports = router;
