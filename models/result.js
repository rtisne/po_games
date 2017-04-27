var db = require('../config/db')

var Result = {
  addResult: function (Result, callback) {
    return db.query('Insert into results values(?,?,?)', [Result.game, Result.member, Result.score], callback)
  },
  updateResult: function (Result, callback) {
    return db.query('Update results SET score=' + Result.score + ' WHERE game=' + Result.game + ' AND member=' + Result.member, callback)
  },
  getResults: function (callback) {
    return db.query('SELECT results.game, members.firstname, members.lastname, results.score FROM results JOIN members ON results.member = members.id', callback)
  }
}
module.exports = Result
