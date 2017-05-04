var db = require('../config/db')

var DateLimit = {
  getDateLimit: function (callback) {
    return db.query('SELECT date FROM date_limit LIMIT 1', callback)
  }
}
module.exports = DateLimit
