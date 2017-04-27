var db = require('../config/db')

var Picture = {
  addPicture: function (Picture, callback) {
    return db.query('Insert into pictures(path) values(?)', [Picture.path], callback)
  },
  getPictures: function (limit, callback) {
    return db.query('SELECT path FROM pictures ORDER BY RAND() LIMIT ' + limit, callback)
  }
}
module.exports = Picture
