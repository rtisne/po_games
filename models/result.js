var db = require('../db')

var Result={
  addResult:function(Result,callback){
    return db.query("Insert into results values(?,?,?)",[Result.game,Result.member,Result.score],callback);
  },
};
module.exports=Result;
