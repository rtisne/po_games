var db = require('../config/db')

var Token={
  getGameForToken:function(token, callback){
    return db.query("Select game from tokens WHERE token = \"" + token + "\"",callback);
},
  getTokenForGame:function(gameId, callback){
    return db.query("Select token from tokens WHERE game = \"" + gameId + "\"",callback);
  }
};
module.exports=Token;
