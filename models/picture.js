var db = require('../config/db')

var Picture = {
  addPicture: function (Picture, session, callback) {
    return db.query('Insert into pictures(path, session) values(?, ?)', [Picture.path, session], callback)
  },
  getPictures: function (limit, callback) {
    return db.query('SELECT path FROM pictures ORDER BY RAND() LIMIT ' + limit, callback)
  },
  getMaxSession: function (callback) {
    return db.query('SELECT MAX(session) as max FROM pictures', callback)
  },
  getPicturesSession: function (callback){
    return db.query('SELECT a.* FROM pictures a INNER JOIN( SELECT session, MAX(id) max_id FROM pictures GROUP BY session) b ON a.session = b .session AND a.id = b.max_id', callback)
  },
  getPicturesFromSession: function (session, callback) {
    return db.query('SELECT * FROM pictures WHERE session= ' + session, callback)
  }
}
module.exports = Picture
