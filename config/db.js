var mysql=require('mysql');
 var connection=mysql.createPool({

host:'localhost',
 user:'root',
 password:'',
 database:'po_games'

});
 module.exports=connection;
