var express = require('express');
var router = express.Router();
var Member = require('../models/member');

router.get('/',function(req,res,next){
  if(req.query.query){
    Member.getMembersWithReq(req.query.query,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  }
  else{
    Member.getAllMembers(function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  }
});
module.exports=router;
