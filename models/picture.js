var db = require('../config/db')

var Picture={
  addPicture:function(Picture,callback){
    return db.query("Insert into pictures(path) values(?)",[Picture.path],callback);
  },
};
module.exports=Picture;
