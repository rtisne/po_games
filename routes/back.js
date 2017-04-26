var express = require('express');
var router = express.Router();
var Game = require('../models/game');


router.get('/',function(req,res,next){
  Game.listGame(function(err,rows){
      if(err){
          res.json(err);
      }else{
        res.render('back/index', { title: 'Hey', message: 'Liste des jeux', games: rows});
      }
  });

});

module.exports=router;
