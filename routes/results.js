var express = require('express');
var router = express.Router();
var Result = require('../models/result');

router.post('/',function(req,res,next){
    try{
        Result.addResult(req.body,function(err,count){
          if(err)
          {
            res.json(err);
          }
          else{
            res.json(req.body);
          }
        });
    } catch(e){
        return res.end();
    }
});

module.exports=router;
