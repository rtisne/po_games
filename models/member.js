var db = require('../db')

var Member={
  getAllMembers:function(callback){
    return db.query("Select * from members",callback);
  },
  getMembersWithReq:function(request, callback){
    var request = "%" + request + "%";
    return db.query("Select * from members WHERE (firstname LIKE \"" + request + "\" OR lastname LIKE  \"" + request + "\" OR email LIKE  \"" + request + "\")",callback);
  }
};
module.exports=Member;
