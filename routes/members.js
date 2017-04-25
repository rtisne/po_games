var express = require('express');
var router = express.Router();
var Member = require('../models/member');

router.get('/',function(req,res,next){
  if(req.query.query){
    try{
        Member.getMembersWithReq(req.query.query,function(err,rows){
          if(err){
            res.json(err);
          }
          else{
            res.json(rows);
          }
        });
    }catch(e){
        return res.end();
    }

  }
  else{
    try{
        Member.getAllMembers(function(err,rows){
          if(err){
            res.json(err);
          }
          else{
            res.json(rows);
          }
        });
    } catch(e){
        return res.end();
    }
  }
});
module.exports=router;
