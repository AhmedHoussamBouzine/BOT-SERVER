const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'coinshistory'
  });


connection.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})
  
  module.exports =connection;