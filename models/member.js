var db = require('../config/db')

var Member = {
  getAllMembers: function (callback) {
    return db.query('Select * from members', callback)
  },
  getMembersWithReq: function (request, callback) {
    var request = '%' + request + '%'
    return db.query("Select * from members WHERE (CONCAT(firstname, ' ', lastname) LIKE \"" + request + "\" OR CONCAT(lastname, ' ', firstname) LIKE  \"" + request + '")', callback)
  }
}
module.exports = Member
