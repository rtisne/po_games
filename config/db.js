var mysql=require('mysql');
 var connection=mysql.createPool({

host:'localhost',
 user:'root',
 password:'parissg',
 database:'po_games'

});
 module.exports=connection;
