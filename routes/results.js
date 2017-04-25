var express = require('express');
var router = express.Router();
var Result = require('../models/result');

router.post('/',function(req,res,next){
  Result.addResult(req.body,function(err,count){
    if(err){
      res.json(err);
    }
    else{
      res.json(req.body);
    }
  });
});

router.get('/',function(req,res,next){
  Result.getResults(function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});
module.exports=router;
