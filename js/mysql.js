var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : '127.0.0.1',
	database: 'gagalin',
		  port: '3306',
	user     : 'root',
	password : '123456',
});

connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  
var  userGetSql = 'SELECT * FROM ga_theme where state=1';
//查
connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------SELECT----------------------------');
       console.log(result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();