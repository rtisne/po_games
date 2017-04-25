var db = require('../config/db')

var Token={
  getGameForToken:function(token, callback){
    return db.query("Select game from tokens WHERE token = \"" + token + "\"",callback);
  }
};
module.exports=Token;
