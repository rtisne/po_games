var db = require('../config/db')

var Game={
  getGame:function(id, callback){
    return db.query("SELECT games.id, games.name, games.min, games.max, mesures.name as mesure FROM games JOIN mesures ON games.mesure = mesures.id WHERE games.id= " + id, callback);
  },
  listGame:function(callback){
    return db.query("SELECT games.id, games.name, games.min, games.max, mesures.name as mesure FROM games JOIN mesures ON games.mesure = mesures.id", callback);
  },
};
module.exports=Game;
