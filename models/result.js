var db = require('../config/db')

var Result={
  addResult:function(Result,callback){
    return db.query("Insert into results values(?,?,?)",[Result.game,Result.member,Result.score],callback);
  },
  getResults:function(callback){
    return db.query("SELECT members.firstname, members.lastname, SUM(results.score) as score FROM members JOIN results ON members.id = results.member GROUP BY members.id")
  },
};
module.exports=Result;
